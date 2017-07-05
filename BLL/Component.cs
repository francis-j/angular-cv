using System;
using System.Collections.Generic;
using DAL;

namespace BLL
{
    public abstract class Component<T> : IComponent<T>
    {
        public Factory<T> factory;

        public void Add(T item)
        {
            factory.Add(item);
        }

        public void Delete(int id)
        {
            factory.Delete(id);
        }

        public IEnumerable<T> Get()
        {
            return factory.Get();
        }

        public T Get(int id)
        {
            return factory.Get(id);
        }

        public void Update(int id, T item)
        {
            factory.Update(id, item);
        }
    }
}