namespace SimpleIB.Server.Controllers.Models
{
    public class ViewRequets
    {
        public string? Path { get; set; }
    }
    public class ViewResponse : ViewRequets
    {
        public string? Html { get; set; }
        public bool Js { get; set; }
        public bool Css { get; set; }
    }
}
