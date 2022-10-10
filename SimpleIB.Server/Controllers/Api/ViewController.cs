using System.Text;
using SimpleIB.Server.Controllers.Api.Models;

namespace SimpleIB.Server.Controllers.Api
{
    public static class ViewController
    {
        private static readonly Type   _type = typeof(ViewController);
        private static readonly string _pathViews = string.Concat(_type.Assembly.Location.Replace(_type.Assembly.ManifestModule.Name, string.Empty), @"wwwroot\ui\views\");

        public static void ApiRegister(WebApplication app)
        {
            app.MapPost("api/view/open", async (ViewRequets view) =>
            {
                return Open(view);
            });
        }

        private static ViewResponse Open(ViewRequets view)
        {
            ViewResponse result = new ViewResponse() { ViewName = view?.ViewName };
            if (view != null)
            {
                Type t = typeof(ViewController);
                string file = string.Concat(_pathViews, view.ViewName, ".html");
                if (System.IO.File.Exists(file))
                {
                    result.Js = System.IO.File.Exists(string.Concat(file, ".js"));
                    result.Css = System.IO.File.Exists(string.Concat(file, ".css"));

                    StringBuilder sb = new StringBuilder();
                    if (result.Css)
                        sb.AppendLine("<link href=\"/ui/views/" + result.ViewName + ".html.css\" rel=\"stylesheet\" />");
                    sb.AppendLine(ReadFileAsString(file));

                    result.Html = sb.ToString();
                }
            }
            return result;
        }

        private static string ReadFileAsString(string aFileName)
        {
            StringBuilder strBuilder = new StringBuilder();
            if (System.IO.File.Exists(aFileName))
            {
                string line = "";

                using (FileStream fileStream = new FileStream(aFileName, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, false))
                {
                    using (StreamReader streamReader = new StreamReader(fileStream, Encoding.UTF8)) //.Default))
                    {
#pragma warning disable CS8600 // Преобразование литерала, допускающего значение NULL или возможного значения NULL в тип, не допускающий значение NULL.
                        line = streamReader.ReadLine();
#pragma warning restore CS8600 // Преобразование литерала, допускающего значение NULL или возможного значения NULL в тип, не допускающий значение NULL.
                        while (line != null)
                        {
                            strBuilder.AppendLine(line);
#pragma warning disable CS8600 // Преобразование литерала, допускающего значение NULL или возможного значения NULL в тип, не допускающий значение NULL.
                            line = streamReader.ReadLine();
#pragma warning restore CS8600 // Преобразование литерала, допускающего значение NULL или возможного значения NULL в тип, не допускающий значение NULL.
                        }
                    }
                }
            }
            return strBuilder.ToString();
        }
    }
}