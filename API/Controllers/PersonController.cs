using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class PersonController : BaseController<Person>
    {
        public PersonController()
        {
            base.component = new PersonComponent();
        }
    }
}
