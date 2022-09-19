using Avalonia.Controls;
using SimpleIB.Server;
using Xilium.CefGlue.Avalonia;

namespace App.Views
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            appBrowser = this.FindControl<AvaloniaCefBrowser>("appBrowser");
            appServer = new SimpleIB.Server.AppServer();
            appServer.Started += AppServerStarted;
            appServer.Run(true);
        }

        private SimpleIB.Server.AppServer appServer;

        private void AppServerStarted(object? sender, System.EventArgs e)
        {
            appBrowser.Address = string.Concat("https://localhost:28070/");
        }

    }
}
