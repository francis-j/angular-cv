using System;
using BE;

namespace DAL
{
    public class UserFactory : Factory<User>
    {
        public UserFactory()
        {
            base.repository = new UserRepository();
        }
    }
}