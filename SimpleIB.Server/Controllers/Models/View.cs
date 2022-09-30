namespace SimpleIB.Server.Controllers.Models
{
    public class ViewRequets
    {
        public string? Path { get; set; }
    }
    public class ViewResponse : ViewRequets
    {
        public string? Html { get; set; }
        public string? Js { get; set; }
        public string? Css { get; set; }
    }
}
