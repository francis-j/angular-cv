using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public abstract class Factory<T> : IFactory<T>
    {
        public Repository<T> repository;

        public IEnumerable<T> Get()
        {
            return this.repository.Get().Result.ToList();
        }

        public T Get(int id)
        {
            return this.repository.Get(id).Result;
        }

        public void Add(T item)
        {
            this.repository.Add(item);
        }

        public void Delete(int id)
        {
            this.repository.Delete(id);
        }

        public void Update(int id, T item)
        {
            this.repository.Update(id, item);
        }
    }
}