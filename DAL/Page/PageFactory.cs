using System;
using System.Collections.Generic;
using System.Linq;
using BE;

namespace DAL
{
    public class PageFactory : Factory<Page>
    {
        public PageFactory()
        {
            base.repository = new PageRepository();
        }
    }
}
