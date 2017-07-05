using System;
using System.Collections.Generic;
using System.Linq;
using DAL;

namespace BLL
{
    public abstract class Component<T> : IComponent<T>
    {
        public Factory<T> factory;

        public void Add(T item)
        {
            bool performAdd = true;
            foreach (var i in Get().ToList())
            {
                if (i.Equals(item))
                    performAdd = false;
            }

            if (performAdd)
                factory.Add(item);
        }

        public void Delete(int id)
        {
            if (Get(id) != null)
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
            if (Get(id) != null)
                factory.Update(id, item);
        }
    }
}