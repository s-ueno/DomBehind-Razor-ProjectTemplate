using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utf8Json;
using Utf8Json.Formatters;

namespace DomBehind.RazorTemplate.Controllers
{
    public class ContentsHogeController : AppController
    {

        public ActionResult Main()
        {
            return View();
        }
        public ActionResult Detail()
        {
            return View();
        }



        public ActionResult FindCustomer(FindRequest request)
        {
            var list = new List<Customer>();
            var count = request?.RecordCount ?? 1000;
            for (int i = 0; i < count; i++)
            {
                list.Add(new Customer()
                {
                    CustomerId = $"ID-{i.ToString().PadLeft(7, '0')}",
                    FirstName = $"Jane(${i})",
                    LastName = $"Doe(${i})",

                    UpdateDate = DateTime.Now.AddDays(i),
                });
            }
            return ToJson(list);
        }

        [Serializable]
        public class FindRequest
        {
            public int? RecordCount { get; set; }

            public string Name { get; set; }
        }

        [Serializable]
        public class Customer
        {
            public string CustomerId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string PhoneNo { get; set; }
            public string Address { get; set; }
            public string City { get; set; }

            public string ZipCode { get; set; }
            public string Notes { get; set; }

            [JsonFormatter(typeof(DateTimeFormatter), "yyyy-MM-dd")]
            public DateTime UpdateDate { get; set; }
            public string Css { get; set; }
            public string CellStyle { get; set; }
        }
    }
}
