using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using DAL;

public class Factory
{
    string connectionString;
    IPersonRepository repository;

    public Factory() 
    {
        this.connectionString = StaticValues.MONGODB_URL;
        this.repository = new PersonRepository(connectionString);
    }

    public List<Person> GetAllPersons()
    {
        return this.repository.GetAll().Result.ToList();
    }

    public Person GetPerson(int id)
    {
        return this.repository.Get(id).Result;
    }

    public bool AddPerson(Person person)
    {
        if (this.repository.Add(person).IsCompleted)
            return true;
        
        return false;
    }

    public bool DeletePerson(int id)
    {
        if (this.repository.Delete(id).IsCompleted)
            return true;
        
        return false;
    }

    public bool UpdatePerson(int id, Person person)
    {
        if (this.repository.Update(id, person).IsCompleted)
            return true;
        
        return false;
    }

    public List<Page> GetPages()
    {
        return new List<Page>()
        {
            new Page()
            {
                Id =  1,
                Title = "Employment History",
                UrlTag = "employment"
            },
            new Page()
            {
                Id = 2,
                Title = "Education",
                UrlTag = "education"
            },
            new Page()
            {
                Id = 3,
                Title = "Hobbies",
                UrlTag = "hobbies"
            },
            new Page()
            {
                Id = 4,
                Title = "Contact",
                UrlTag = "contact"
            }
        };
    }
}