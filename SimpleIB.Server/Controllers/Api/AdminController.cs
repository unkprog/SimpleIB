using SimpleIB.Server.Controllers.Api.Models;

namespace SimpleIB.Server.Controllers.Api
{
    public class AdminController
    {
        private static ILogger<AdminController>? logger;
        public static void ApiRegister(WebApplication app)
        {
           logger = app.Services.GetRequiredService<ILogger<AdminController>>();
            
            app.MapGet("api/admin/servers", async () => Servers());
            app.MapGet("api/admin/databases", async () => Databases());
            app.MapGet("api/admin/welcome", async () => Welcome());
        }

        private static List<ServerResponse> Servers()
        {
            List<ServerResponse> result = new List<ServerResponse>();
            for (int i = 0; i < 20; i++)
            {
                result.Add(new ServerResponse() { Id = i + 1, IP = "192.168.0." + (100 + i).ToString(), Port = 123 });
            }
            result.Add(new ServerResponse() { Id = 0, Name = "Добавить сервер" });
            return result;
        }

        private static List<DatabaseResponse> Databases()
        {
            List<DatabaseResponse> result = new List<DatabaseResponse>();
            result.Add(new DatabaseResponse() { Id = 0, Name = "Добавить базу" });
            return result;
        }

        private static WelcomeResponse Welcome()
        {
            WelcomeResponse result = new WelcomeResponse();
            result.Servers = Servers();
            result.Databases = Databases();
            return result;
        }
    }
}