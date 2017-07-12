using System;
using System.Collections.Generic;
using MongoDB.Bson;

namespace DAL
{
    public interface IFactory<T>
    {
        IEnumerable<T> Get();
        IEnumerable<T> Get(IEnumerable<KeyValuePair<string, object>> filters);
        void Add(T item);
        void Delete(ObjectId id);
        void Update(ObjectId id, T item);
    }
}