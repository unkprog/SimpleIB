namespace SimpleIB.Server.Controllers.Api
{
    public class DataController
    {
        private static ILogger<DataController>? logger;
        public static void ApiRegister(WebApplication app)
        {
            logger = app.Services.GetRequiredService<ILogger<DataController>>();

        }

       

    }
}
