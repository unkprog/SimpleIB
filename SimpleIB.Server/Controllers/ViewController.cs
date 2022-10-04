using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using SimpleIB.Server.Controllers.Models;
using System.Text;

namespace SimpleIB.Server.Controllers
{
    [ApiController]
    [Route("api/view")]
    public class ViewController : ControllerBase
    {
        private readonly ILogger<ViewController> _logger;
        private readonly string _pathViews;

        public ViewController(ILogger<ViewController> logger)
        {
            _logger = logger;
            System.Type t = typeof(ViewController);
            _pathViews = string.Concat(t.Assembly.Location.Replace(t.Assembly.ManifestModule.Name, string.Empty), @"wwwroot\ui\views\");
        }

        [HttpPost]
        [Route("open")]
        public ViewResponse Open(ViewRequets view)
        {
            ViewResponse result = new ViewResponse() { ViewName = view?.ViewName };
           if (view != null)
            {
                System.Type t = typeof(ViewController);
                string file = string.Concat(_pathViews, view.ViewName, ".html");
                if (System.IO.File.Exists(file))
                {
                    result.Js = System.IO.File.Exists(string.Concat(file, ".js"));
                    result.Css = System.IO.File.Exists(string.Concat(file, ".css"));

                    StringBuilder sb = new StringBuilder();
                    if (result.Css)
                        sb.AppendLine("<link href=\"/ui/views/" + result.ViewName + ".html.css\" rel=\"stylesheet\" />");
                    sb.AppendLine(ReadFileAsString(file));
                    //if (result.Js)
                    //    sb.AppendLine("<script type=\"module\" src=\"/ui/views/" + result.ViewName + ".html.js\" async></script>");

                    result.Html = sb.ToString();
                }
            }
            return result;
        }

        public string ReadFileAsString(string aFileName)
        {
            StringBuilder strBuilder = new StringBuilder();
            if (System.IO.File.Exists(aFileName))
            {
                string line = "";

                using (FileStream fileStream = new FileStream(aFileName, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, false))
                {
                    using (StreamReader streamReader = new StreamReader(fileStream, Encoding.UTF8)) //.Default))
                    {
                        line = streamReader.ReadLine();
                        while (line != null)
                        {
                            strBuilder.AppendLine(line);
                            line = streamReader.ReadLine();
                        }
                    }
                }
            }
            return strBuilder.ToString();
        }
    }
}