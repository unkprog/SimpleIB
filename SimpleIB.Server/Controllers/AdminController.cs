using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using SimpleIB.Server.Controllers.Models;
using System.Collections.Generic;
using System.Text;

namespace SimpleIB.Server.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly ILogger<ViewController> _logger;

        public AdminController(ILogger<ViewController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("servers")]
        public List<ServerResponse> Servers()
        {
            List<ServerResponse> result = new List<ServerResponse>();
            result.Add(new ServerResponse() { Id = 0, Name = "Добавить сервер" });
            return result;
        }

        [HttpGet]
        [Route("databases")]
        public List<DatabaseResponse> Databases()
        {
            List<DatabaseResponse> result = new List<DatabaseResponse>();
            result.Add(new DatabaseResponse() { Id = 0, Name = "Добавить базу" });
            return result;
        }

        [HttpGet]
        [Route("welcome")]
        public WelcomeResponse Welcome()
        {
            WelcomeResponse result = new WelcomeResponse();
            result.Servers = Servers();
            result.Databases = Databases();
            return result;
        }
    }
}