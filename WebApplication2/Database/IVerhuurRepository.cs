using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication2.Model;

namespace WebApplication2.Database
{
    interface IVerhuurRepository
    {
        List<Verhuur> GetVerhuurByAccount(Account account);
        List<Exemplaar> GetExemplaren(int amount);
        bool InsertVerhuur(Verhuur verhuur);
        bool DeleteVerhuurById(int id, int exemplaarid);
    }
}
