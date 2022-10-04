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
            result.Add(new ServerResponse() { Id = 0, Name = "�������� ������" });
            return result;
        }

        [HttpGet]
        [Route("bases")]
        public List<DatabaseResponse> Bases()
        {
            List<DatabaseResponse> result = new List<DatabaseResponse>();
            result.Add(new DatabaseResponse() { Id = 0, Name = "�������� ����" });
            return result;
        }
    }
}