using System;
using System.Collections.Generic;
using DAL;

namespace BLL
{
    public class PageComponent
    {
		PageFactory factory;

		public PageComponent()
		{
			factory = new PageFactory();
		}

		public List<Page> GetAllPages()
		{
            return factory.GetAllPages();
		}

		public Page GetPage(int id)
		{
			return factory.GetPage(id);
		}

		public bool AddPage(Page page)
		{
			return factory.AddPage(page);
		}

		public bool DeletePage(int id)
		{
			return factory.DeletePage(id);
		}

		public bool UpdatePage(int id, Page page)
		{
			return factory.UpdatePage(id, page);
		}
    }
}
