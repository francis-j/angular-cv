using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BE;

namespace DAL
{
    public interface IPersonRepository
    {
        Task<IEnumerable<Person>> GetAll();
        Task<Person> Get(int id);
        Task Add(Person person);
        Task Update(int id, Person person);
        Task<Person> Delete(int id);
    }
}
