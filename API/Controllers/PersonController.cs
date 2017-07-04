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
    public class PersonController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            var component = new PersonComponent();
            return component.GetAllPersons();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Person Get(int id)
		{
			var component = new PersonComponent();
            return component.GetPerson(id);
        }

        // POST api/values
        [HttpPost]
        public bool Post([FromBody]Person person)
		{
			var component = new PersonComponent();
            return component.AddPerson(person);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody]Person person)
		{
			var component = new PersonComponent();
            return component.UpdatePerson(id, person);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
		{
			var component = new PersonComponent();
            return component.DeletePerson(id);
        }
    }
}
