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
            if (GetById(id) != null)
                factory.Delete(id);
        }

        public IEnumerable<T> Get()
        {
            var list = factory.Get();

            return list;
        }

        public T GetById(int id)
        {
            var filters = new List<KeyValuePair<string, object>>();
            filters.Add(new KeyValuePair<string, object>("_id", id));

            var items = Get(filters);

            if (items.Count() > 0)
            {
                var item = items.ToList().FirstOrDefault();
                return item;
            }

            return default(T);
        }

        public IEnumerable<T> Get(IEnumerable<KeyValuePair<string, object>> filters)
        {
            var list = factory.Get(filters);

            return list;
        }

        public void Update(int id, T item)
        {
            if (GetById(id) != null)
                factory.Update(id, item);
        }
    }
}