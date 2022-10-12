namespace SimpleIB.Server.Controllers.Api.Models
{
    public class IdResponse
    {
        public int Id { get; set; }
      
    }

    public class NamedResponse : IdResponse
    {
        public virtual string? Name { get; set; }
    }

    public class ServerResponse : NamedResponse
    {
        private string? _name;
        public override string? Name
        {
            get => string.IsNullOrEmpty(_name) ? string.Concat(IP, (string.IsNullOrEmpty(IP) && Port == 0 ? string.Empty : ":"), Port) : _name;
            set => _name = value;
        }
        public string? IP { get; set; }
        public int? Port { get; set; }
    }

    public class DatabaseResponse: NamedResponse
    {

    }

    public class WelcomeResponse 
    {
        public List<ServerResponse>? Servers { get; set; }
        public List<DatabaseResponse>? Databases { get; set; }
    }

}
