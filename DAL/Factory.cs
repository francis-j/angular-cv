using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;

namespace DAL
{
    public abstract class Factory<T> : IFactory<T>
    {
        public Repository<T> repository;

        public IEnumerable<T> Get()
        {
            var list = this.repository.Get().Result.ToList();

            return list;
        }

        public IEnumerable<T> Get(IEnumerable<KeyValuePair<string, object>> filters)
        {
            var list = this.repository.Get(filters.ToList()).Result;

            return list;
        }

        public void Add(T item)
        {
            this.repository.Add(item);
        }

        public void Delete(ObjectId id)
        {
            this.repository.Delete(id);
        }

        public void Update(ObjectId id, T item)
        {
            this.repository.Update(id, item);
        }
    }
}