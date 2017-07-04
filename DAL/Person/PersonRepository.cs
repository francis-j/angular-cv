using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BE;
using DAL;
using MongoDB.Bson;
using MongoDB.Driver;

public class PersonRepository : IPersonRepository
{
    MongoClient client;
    IMongoDatabase database;
    IMongoCollection<Person> collection;

    public PersonRepository(string connectionString)
    {
        if (string.IsNullOrEmpty(connectionString))
            throw new ArgumentException("Connection string not found.");

        this.client = new MongoClient(connectionString);
        this.database = this.client.GetDatabase("Resume");
        this.collection = this.database.GetCollection<Person>("Person");
    }

    public async Task Add(Person person)
    {
        await this.collection.InsertOneAsync(person);
    }

    public async Task<Person> Delete(int id)
    {
        var filter = Builders<Person>.Filter.Eq("_id", id);
        var person = await this.collection.FindOneAndDeleteAsync(filter);
        
        return person;
    }

    public async Task<Person> Get(int id)
    {
        var filter = Builders<Person>.Filter.Eq("_id", id);
        var person = await this.collection.Find(filter).FirstAsync();
        
        return person;
    }

    public async Task<IEnumerable<Person>> GetAll()
    {
        var persons = await this.collection.Find(new BsonDocument()).ToListAsync();

        return persons;
    }

    public async Task Update(int id, Person person)
    {
        var filter = Builders<Person>.Filter.Eq("_id", id);
        
        await this.collection.ReplaceOneAsync(filter, person);
    }
}