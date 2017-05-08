using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication2.Model
{
    public class Plek
    {
        public int ID { get; set; }
        public int LocatieID { get; set; }
        public Specificatie specificatie { get; set; }
        public override string ToString()
        {
            return "PlekID: " + ID;
        }
    }
}
