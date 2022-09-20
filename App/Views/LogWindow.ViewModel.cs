using System.Collections.ObjectModel;
using SimpleIB.Server.LoggerProviders;

namespace App.Views.Models
{
    public class LogViewModel : ViewModelBase, ILoggerOutput
    {
        public static readonly ObservableCollection<string> LogItems = new ObservableCollection<string>();

        public void Write(string logRecord)
        {
            LogItems.Insert(0, logRecord);
        }

        public static void Log(string logRecord)
        {
            LogItems.Insert(0, logRecord);
        }
    }

    public class LogWindowViewModel : LogViewModel
    {

        public LogWindowViewModel()
        {
        }

        public ObservableCollection<string> Items => LogItems;
    }
}
