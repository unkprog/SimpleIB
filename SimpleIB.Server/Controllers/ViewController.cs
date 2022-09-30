using Microsoft.AspNetCore.Mvc;
using SimpleIB.Server.Controllers.Models;

namespace SimpleIB.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ViewController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<ViewController> _logger;

        public ViewController(ILogger<ViewController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ViewResponse Get(ViewRequets view)
        {
            ViewResponse result = new ViewResponse() { Path = view?.Path };
           if (view != null)
            {

            }
            return result;
        }


    }
}