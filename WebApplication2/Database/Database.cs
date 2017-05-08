using System.Data.SqlClient;
//using System.Configuration;

namespace WebApplication2.Database
{
    public class Database
    {
    //private static readonly string connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;
    private static readonly string connectionString = "Data Source=mssql.fhict.local;Initial Catalog=dbi342472;User ID=dbi342472;Password=PTS24Events";


        public static SqlConnection Connection
        {
            get
            {
                SqlConnection connection = new SqlConnection(connectionString);
                connection.Open();
                return connection;
            }
        }
    }
}
