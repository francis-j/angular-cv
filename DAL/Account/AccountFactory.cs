using System;
using System.Collections.Generic;
using System.Linq;
using BE;

namespace DAL
{
    public class AccountFactory : Factory<Account>
    {
        public AccountFactory()
        {
            this.repository = new AccountRepository();
        }
    }
}