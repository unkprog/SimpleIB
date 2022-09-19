using SimpleIB.Server.LoggerProviders;

namespace SimpleIB.Server
{
    public class AppServer
    {
        public void Run(bool async = false)
        {
            var builder = WebApplication.CreateBuilder();
            CongigureServices(builder);

            var app = builder.Build();
            Congigure(app);
            ConfigureEvents(app);

            if (async)
                app.RunAsync();
            else
                app.Run();
        }


        internal void CongigureServices(WebApplicationBuilder builder)
        {
            builder.Logging.AddServerLogger(options => { });

            // Add services to the container.
            builder.Services.AddControllers();
        }

        internal void Congigure(WebApplication app)
        {
            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            //app.UseAuthorization();
            app.MapControllers();
        }

        internal void ConfigureEvents(WebApplication app)
        {
            IHostApplicationLifetime lifetime = app.Lifetime;
            lifetime.ApplicationStarted.Register(OnAppStartup);
        }

        internal void OnAppStartup()
        {

        }
    }
}
