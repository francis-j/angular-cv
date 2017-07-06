using System;
using System.Collections.Generic;
using System.Linq;
using BE;

namespace DAL
{
    public class UserFactory : Factory<User>
    {
        public UserFactory()
        {
            this.repository = new UserRepository();
        }
    }
}