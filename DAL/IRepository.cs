using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> Get();
        Task<T> Get(int id);
        void Add(T item);
        void Delete(int id);
        void Update(int id, T item);
    }
}
