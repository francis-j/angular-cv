using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using DAL;

namespace BLL
{
    public class PageComponent : Component<Page>
    {
		public PageComponent()
		{
			base.factory = new PageFactory();
		}
    }
}
