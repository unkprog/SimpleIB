using SimpleIB.Server;

internal class Program
{
    private static void Main(string[] args)
    {
        AppServer appServer = new AppServer();
        appServer.Run();
    }
}