using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace DomBehind.RazorTemplate.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Titlebar()
        {
            return View();
        }
        public ActionResult SideMenu()
        {
            return View();
        }
    }
}
