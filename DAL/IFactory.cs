using System;
using System.Collections.Generic;

namespace DAL
{
    public interface IFactory<T>
    {
        IEnumerable<T> Get();
        T Get(int id);
        void Add(T item);
        void Delete(int id);
        void Update(int id, T item);
    }
}