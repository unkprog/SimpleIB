using App.Views.Models;
using Avalonia.Controls;
using SimpleIB.Server;
using SimpleIB.Server.Data;
using SimpleIB.Server.LoggerProviders;
using Xilium.CefGlue.Avalonia;

namespace App.Views
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            ServerLogger.SetLoggerOutput(new LogViewModel());
            appBrowser = this.FindControl<AvaloniaCefBrowser>("appBrowser");
            appServer = new SimpleIB.Server.AppServer();
            appServer.Started += AppServerStarted;
            appServer.Run(true);

            appButtonTools.Click += AppButtonTools_Click;
           
        }

        private void AppButtonTools_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
        {
            appBrowser.ShowDeveloperTools();
        }

        private SimpleIB.Server.AppServer appServer;


        private void AppServerStarted(object? sender, System.EventArgs e)
        {
#if DEBUG
            Window w = new LogWindow();
            w.Show();
#endif
            appBrowser.Address = string.Concat("https://localhost:28070/");
            DatabaseManager.CheckSettingsDB();
        }

    }
}
