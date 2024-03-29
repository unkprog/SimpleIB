﻿using System.Net;
using SimpleIB.Server.Controllers.Api;
using SimpleIB.Server.LoggerProviders;

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
            builder.WebHost.ConfigureKestrel(serverOptions =>
            {
                serverOptions.Listen(IPAddress.Loopback, 15050);
                serverOptions.Listen(IPAddress.Loopback, 28070, listenOptions => listenOptions.UseHttps());
            });
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

            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("/ui/index.html");
            app.UseDefaultFiles(options);

            app.UseStaticFiles();
            //app.UseAuthorization();
            //app.MapControllers();

            AdminDataController.ApiRegister(app);
            AdminController.ApiRegister(app);
            ViewController.ApiRegister(app);
            DataController.ApiRegister(app);
        }

        internal void ConfigureEvents(WebApplication app)
        {
            IHostApplicationLifetime lifetime = app.Lifetime;
            lifetime.ApplicationStarted.Register(OnAppStartup);
        }

        public event EventHandler? Started;

        internal void OnAppStartup()
        {
            AdminDataController.Init();
            Started?.Invoke(this, EventArgs.Empty);
        }
    }
}
