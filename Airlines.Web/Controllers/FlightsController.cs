using Airlines.Web.Model;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Airlines.Web.Controllers
{
    public class FlightsController : ApiController
    {
        public IHttpActionResult GetAllFlights()
        {
            var model = new List<Flight>
            {
                new Flight() { Id=1, Airline="Delta", Approved= false, cities = new[] { "ORD, SFO"}, StartTime = DateTime.Now, TotalDuration = 8, Price = 300 },
                new Flight() { Id=2, Airline="JetBlue", Approved= true, cities = new[] { "ORD, SFO"}, StartTime = DateTime.Now, TotalDuration = 8, Price = 500  },

            };

            return Ok(model);
        }
    }
}
