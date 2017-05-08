using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication2.Model;

namespace WebApplication2.Database
{
    public interface IMediaRepository
    {
        List<Bericht> GetBerichten(int aantal);
        List<Bericht> GetReacties();
        Bestand GetBestandById(int id);
        bool InsertLike(Bericht bericht, Account account);
        bool InsertReport(Bericht bericht, Account account);
        int GetLikesAmount(Bericht bericht);
        int GetReportAmount(Bericht bericht);
        bool InsertBericht(Bericht bericht);
        bool DeleteBericht(int id);
    }
}
