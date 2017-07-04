using System;
using System.Collections.Generic;
using BE;
using DAL;

public class PersonRepository : IPersonRepository
{
    public PersonRepository(string connectionString)
    {
        if (string.IsNullOrEmpty(connectionString))
            throw new ArgumentException("Connection string not found.");
    }

    public Person Add(Person person)
    {
        throw new NotImplementedException();
    }

    public bool Delete(int id)
    {
        throw new NotImplementedException();
    }

    public Person Get(int id)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<Person> GetAll()
    {
        throw new NotImplementedException();
    }

    public bool Update(int id)
    {
        throw new NotImplementedException();
    }
}