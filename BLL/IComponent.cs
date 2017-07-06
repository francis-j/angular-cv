using System;
using System.Collections.Generic;

namespace BLL
{
    public interface IComponent<T>
    {
        IEnumerable<T> Get();
        IEnumerable<T> Get(IEnumerable<KeyValuePair<string, object>> filters);
        T GetById(int id);
        void Add (T item);
        void Delete (int id);
        void Update(int id, T item);
    }
}