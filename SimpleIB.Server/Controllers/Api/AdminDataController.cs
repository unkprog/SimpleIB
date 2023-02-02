using Microsoft.Data.Sqlite;

namespace SimpleIB.Server.Controllers.Api
{
    public class AdminDataController
    {
        private static readonly Type _type = typeof(AdminDataController);
        private static readonly string _adminDatasource = string.Concat(_type.Assembly.Location.Replace(_type.Assembly.ManifestModule.Name, string.Empty), @"SimpleIB.aib");
        private static ILogger<AdminDataController>? logger;
        public static void ApiRegister(WebApplication app)
        {
            logger = app.Services.GetRequiredService<ILogger<AdminDataController>>();
        }

        public static void Init()
        {
            logger?.LogInformation("Start init admin infobase...");
            //create table if not exists server (name text, ip text, port integer);
            using (SqliteConnection connection = new SqliteConnection($"Data Source={_adminDatasource}"))
            {
                string cmdText = "create table if not exists server (name text, ip text, port integer);";
                using (SqliteCommand command = new SqliteCommand(cmdText, connection))
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                }

                cmdText = "create table if not exists database (name text);";
                using (SqliteCommand command = new SqliteCommand(cmdText, connection))
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }
            logger?.LogInformation("End init admin infobase...");
        }
    }
}
