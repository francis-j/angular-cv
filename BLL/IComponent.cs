using System;
using System.Collections.Generic;

namespace BLL
{
    public interface IComponent<T>
    {
        IEnumerable<T> Get();
        T Get(int id);
        void Add (T item);
        void Delete (int id);
        void Update(int id, T item);
    }
}