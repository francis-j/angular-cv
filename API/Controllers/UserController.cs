using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE;
using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    [Authorize]
    public class UserController : BaseController<User>
    {
        public UserController()
        {
            this.component = new UserComponent();
        }

        [HttpPost]
        public override bool Post([FromBody]User item)
		{
            //Prepare new object
            item.Id = ObjectId.GenerateNewId().ToString();

            return base.Post(item);
        }
    }
}