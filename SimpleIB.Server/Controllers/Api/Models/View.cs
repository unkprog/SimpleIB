namespace SimpleIB.Server.Controllers.Api.Models
{
    public class ViewRequets
    {
        public string? ViewName { get; set; }
    }
    public class ViewResponse : ViewRequets
    {
        public string? Html { get; set; }
        public bool Js { get; set; }
        public bool Css { get; set; }
    }
}
