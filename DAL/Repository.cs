using System;
using System.Collections.Generic;
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
        private IMongoCollection<T> collection;

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

        public async Task<T> Get(int id)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            var item = await this.collection.Find(filter).FirstOrDefaultAsync();

            return item;
        }

        public async void Add(T item)
        {
            await this.collection.InsertOneAsync(item);
        }

        public async void Delete(int id)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            await this.collection.DeleteOneAsync(filter);
        }

        public async void Update(int id, T item)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            await this.collection.FindOneAndReplaceAsync(filter, item);
        }
    }
}