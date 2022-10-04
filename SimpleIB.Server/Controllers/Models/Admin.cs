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


}
