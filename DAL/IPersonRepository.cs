using System;
using System.Collections.Generic;
using BE;

namespace DAL
{
    public interface IPersonRepository
    {
        IEnumerable<Person> GetAll();
        Person Get(int id);
        Person Add(Person person);
        bool Update(int id);
        bool Delete(int id);
    }
}
