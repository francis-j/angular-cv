using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using DAL;

namespace BLL
{
    public class AccountComponent : Component<Account>
    {
        public AccountComponent()
        {
            this.factory = new AccountFactory();
        }

        public Account Login(Account account)
        {
            var filters = new List<KeyValuePair<string, object>>();
            filters.Add(new KeyValuePair<string, object>(account.Username, account.Password));
            
            var result = (this.factory as AccountFactory).Get(filters).ToList().First();

            return result;
        }
    }
}