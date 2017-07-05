using System;
using BE;
using DAL;

namespace BLL
{
    public class UserComponent : Component<User>
    {
        public UserComponent()
        {
            base.factory = new UserFactory();
        }
    }
}