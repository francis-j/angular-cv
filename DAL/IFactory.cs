using System;
using System.Collections.Generic;

namespace DAL
{
    public interface IFactory<T>
    {
        IEnumerable<T> Get();
        IEnumerable<T> Get(IEnumerable<KeyValuePair<string, object>> filters);
        void Add(T item);
        void Delete(int id);
        void Update(int id, T item);
    }
}