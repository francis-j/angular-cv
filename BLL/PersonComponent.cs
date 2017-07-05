using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using BLL;
using DAL;

public class PersonComponent : Component<Person>
{
    public PersonComponent()
    {
        base.factory = new PersonFactory();
    }
}