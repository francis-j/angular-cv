using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> Get();
        Task<IEnumerable<T>> Get(List<KeyValuePair<string, object>> filters);
        void Add(T item);
        void Delete(int id);
        void Update(int id, T item);
    }
}
