using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication2.Model;

namespace WebApplication2.Database
{
    public interface IReserveringRepository
    {
        List<Reservering> GetAllReserveringen();
        List<Reservering> GetReserveringenByEvent(int EventID);
        bool UpdateReservering(Reservering reservering);
        List<Locatie> GetAllLocaties();
        List<Plek> GetAllKampeerPlekByLocatie(Locatie locatie);
        List<Plek> GetAllFreeKampeerPlek();
        int InsertReservering(Reservering reservering);
        bool InsertReserveringAccount(Reservering reservering, Account account);
        bool InsertReserveringPlek(Reservering reservering, Plek plek);
    }
}
