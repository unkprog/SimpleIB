using Microsoft.Extensions.Options;
using SimpleIB.Server.LoggerProviders;
using System.Net;

namespace SimpleIB.Server
{
    public class AppServer
    {
        public void Run(bool async = false)
        {
            var builder = WebApplication.CreateBuilder();
            
            CongigureHost(builder);
            CongigureServices(builder);

            var app = builder.Build();
            Congigure(app);
            ConfigureEvents(app);

            if (async)
                app.RunAsync();
            else
                app.Run();
        }

        internal void CongigureHost(WebApplicationBuilder builder)
        {
            //builder.WebHost.ConfigureKestrel(options => options.Listen(System.Net.IPAddress.Parse("192.168.86.245"), 5003));
            builder.WebHost.ConfigureKestrel(serverOptions =>
            {
                serverOptions.Listen(IPAddress.Loopback, 15050);
                serverOptions.Listen(IPAddress.Loopback, 28070, listenOptions => listenOptions.UseHttps());
            });
            //builder.WebHost.UseUrls("http://localhost:15050;https://localhost:28070");

        }

        internal void CongigureServices(WebApplicationBuilder builder)
        {
            builder.Logging.AddServerLogger(options => { });

            // Add services to the container.
            builder.Services.AddControllers();
        }

        internal void Congigure(WebApplication app)
        {
            //app.Urls.Add("http://localhost:15050");
            //app.Urls.Add("https://localhost:28070");

            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();


            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("/ui/index.html");
            app.UseDefaultFiles(options);

            app.UseStaticFiles();
            //app.UseAuthorization();
            app.MapControllers();

            
        }

        internal void ConfigureEvents(WebApplication app)
        {
            IHostApplicationLifetime lifetime = app.Lifetime;
            lifetime.ApplicationStarted.Register(OnAppStartup);
        }

        public event EventHandler? Started;

        internal void OnAppStartup()
        {
            Started?.Invoke(this, EventArgs.Empty);
        }
    }
}
