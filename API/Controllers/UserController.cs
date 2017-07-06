using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE;
using BLL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class UserController : BaseController<User>
    {
        public UserController()
        {
            this.component = new UserComponent();
        }

        [HttpGet("{username, password}")]
        public User Login(string username, string password)
        {
            var user = (this.component as UserComponent).Login(username, password);

            return user;
        }
    }
}