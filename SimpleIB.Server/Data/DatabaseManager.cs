using Microsoft.Data.Sqlite;

namespace SimpleIB.Server.Data
{
    public class DatabaseManager
    {


        public static void NewDatabase(string aName)
        {
            //SqliteConnection sqliteConnection = new SqliteConnection();
            //SQLiteConnection.CreateFile("MyDatabase.sqlite");
        }


        public static void CheckSettingsDB()
        {
            using (SqliteConnection connection = new SqliteConnection("Data Source=simpleib.set;"))  //;Version=3
            {
                connection.Open();
                string cmd = "CREATE TABLE IF NOT EXISTS bases (name TEXT NOT NULL);";
                using(SqliteCommand command = new SqliteCommand(cmd, connection))
                {
                    command.ExecuteNonQuery();
                }

            }
        }
    }
}
