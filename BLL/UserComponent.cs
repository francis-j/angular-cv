using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using DAL;

namespace BLL
{
    public class UserComponent : Component<User>
    {
        public UserComponent()
        {
            this.factory = new UserFactory();
        }

        public User Login(string username, string password)
        {
            var filters = new List<KeyValuePair<string, object>>();
            filters.Add(new KeyValuePair<string, object>(username, password));
            
            var user = (this.factory as UserFactory).Get(filters).ToList().First();

            return user;
        }
    }
}