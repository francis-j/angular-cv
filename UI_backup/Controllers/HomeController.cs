using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace cv.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Employment()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Education()
        {
            return View();
        }

        public IActionResult Skills()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult More()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
    }
}
