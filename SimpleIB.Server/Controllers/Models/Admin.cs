namespace SimpleIB.Server.Controllers.Models
{
    public class IdResponse
    {
        public int Id { get; set; }
      
    }

    public class NamedResponse : IdResponse
    {
        public string? Name { get; set; }
    }

    public class ServerResponse: NamedResponse
    {
      
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
