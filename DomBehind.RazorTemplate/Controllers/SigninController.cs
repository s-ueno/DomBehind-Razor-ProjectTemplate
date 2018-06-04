using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace DomBehind.RazorTemplate.Controllers
{
    [Authorize]
    public class SigninController : Controller
    {
        [HttpGet, AllowAnonymous]
        public ActionResult Index()
        {
            // Store the root URI for supplementing at the time of request from the client in ViewBag
            var uri = string.Format("{0}://{1}{2}", Request.Url.Scheme, Request.Url.Authority, Url.Content("~"));
            ViewBag.RootUri = uri;
            ViewBag.Culture = RequestCulture().TextInfo.CultureName.ToLower();
            return View();
        }

        private CultureInfo RequestCulture()
        {
            var userLanguages = Request.UserLanguages;
            CultureInfo ci;
            if (userLanguages.Count() > 0)
            {
                try
                {
                    ci = new CultureInfo(userLanguages[0]);
                }
                catch (CultureNotFoundException)
                {
                    ci = CultureInfo.InvariantCulture;
                }
            }
            else
            {
                ci = CultureInfo.InvariantCulture;
            }
            return ci;
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult SignIn(SignInRequest request)
        {
            // ajax async long running proccess
            System.Threading.Thread.Sleep(3 * 1000);

            // Ask the server side business logic layer
            //var accountService = new AccountService();
            //if (!accountService.Login(request.Email, request.Password))
            //{
            //    throw new System.Security.Authentication.AuthenticationException("authentication error");
            //}


            // Here we provide sample ticket certification
            var ticket = new FormsAuthenticationTicket(1,
                  request.Email,
                  DateTime.Now,
                  DateTime.Now.AddMinutes(30),
                  true,
                  request.Password,
                  FormsAuthentication.FormsCookiePath);
            var encTicket = FormsAuthentication.Encrypt(ticket);
            Response.Cookies.Add(new HttpCookie(FormsAuthentication.FormsCookieName, encTicket));

            return new JsonResult() { Data = new { AllowSignin = true, Message = "Welcome! To DomBehind!!" } };
        }
        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            return Redirect("/Home");
        }
    }


    public class SignInRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}