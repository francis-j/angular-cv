using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using DAL;

namespace DAL
{
    public class PersonFactory : Factory<Person>
    {
        public PersonFactory() 
        {
            base.repository = new PersonRepository();
        }
    }
}
