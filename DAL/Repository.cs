using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DAL
{
    public abstract class Repository<T> : IRepository<T>
    {
        private MongoClient client;
        private IMongoDatabase database;
        public IMongoCollection<T> collection;

        public Repository()
        {
            var connectionString = LookupValues.MONGODB_URL;
            this.client = new MongoClient(connectionString);
            this.database = this.client.GetDatabase(LookupValues.MONGODB_DATABASE_NAME);
            
            this.collection = this.database.GetCollection<T>(typeof(T).Name);
        }

        public async Task<IEnumerable<T>> Get()
        {
            var items = await this.collection.Find(new BsonDocument()).ToListAsync();

            return items;
        }

        public async Task<IEnumerable<T>> Get(List<KeyValuePair<string, object>> filters)
        {
            var definitions = new List<FilterDefinition<T>>();

            foreach (var filter in filters)
            {
                var definition = Builders<T>.Filter.Eq(filter.Key, filter.Value);
                definitions.Add(definition);
            }

            var masterFilter = Builders<T>.Filter.And(definitions);

            var result = await this.collection.Find(masterFilter).ToListAsync();

            return result;
        }

        public async void Add(T item)
        {   
            await this.collection.InsertOneAsync(item);
        }

        public async void Delete(ObjectId id)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            await this.collection.DeleteOneAsync(filter);
        }

        public async void Update(ObjectId id, T item)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            await this.collection.FindOneAndReplaceAsync(filter, item);
        }
    }
}