using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Controllers;
using BE;
using BLL;
using Microsoft.AspNetCore.Mvc;

namespace API
{
    public class AccountController : BaseController<Account>
    {
        public AccountController()
        {
            base.component = new AccountComponent();
        }

        [HttpGet("username, password")]
        public IActionResult Login([FromBody]Account account)
        {
            if ((this.component as AccountComponent).Login(account) != null) 
            {
                if (ModelState.IsValid)
                {
                    var result = (base.component as AccountComponent).Login(account);

                    if (result == null)
                        return BadRequest();
                }
                else 
                {
                    return BadRequest();
                }
            }

            return Ok();
        }
    }
}