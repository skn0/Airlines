using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Airlines.Web.Model
{
    public class Flight
    {
        public int Id { get; set; }
        public string Airline { get; set; }
        public string FlightNumber { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndtTime { get; set; }
        public int TotalDuration { get; set; }
        public decimal Price{ get; set; }
        public DateTime Date { get; set; }
        public string[] cities { get; set; }
        public bool Approved { get; set; }

    }
}
