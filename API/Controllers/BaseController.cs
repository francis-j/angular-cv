using System;
using System.Collections.Generic;
using BLL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public abstract class BaseController<T> : Controller
    {
        public IComponent<T> component;

        // GET: api/values
        [HttpGet]
        public IEnumerable<T> Get()
        {
            return component.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public T Get(int id)
		{
            return component.Get(id);
        }

        // POST api/values
        [HttpPost]
        public bool Post([FromBody]T item)
		{
            try
            {
                component.Add(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return false;
            }

            return true;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody]T item)
		{
            try
            {
                component.Update(id, item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                
                return false;
            }

            return true;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
		{
            try
            {
                component.Delete(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                
                return false;
            }

            return true;
        }
    }
}