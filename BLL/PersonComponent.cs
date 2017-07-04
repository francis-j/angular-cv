using System;
using System.Collections.Generic;
using BE;

public class PersonComponent
{
    PersonFactory factory;

    public PersonComponent()
    {
        factory = new PersonFactory();
    }

    public List<Person> GetAllPersons()
    {
        return factory.GetAllPersons();
    }

    public Person GetPerson(int id)
    {
        return factory.GetPerson(id);
    }

    public bool AddPerson(Person person)
    {
        return factory.AddPerson(person);
    }

    public bool DeletePerson(int id)
    {
        return factory.DeletePerson(id);
    }

    public bool UpdatePerson(int id, Person person)
    {
        return factory.UpdatePerson(id, person);
    }
}