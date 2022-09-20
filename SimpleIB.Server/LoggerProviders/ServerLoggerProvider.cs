using Microsoft.Extensions.Options;
using System.Diagnostics.CodeAnalysis;

namespace SimpleIB.Server.LoggerProviders
{
    public interface ILoggerOutput
    {
        void Write(string logRecord);
    }

    public class ServerLoggerProviderOptions
    {
    }

    // ServerLoggingLoggerProvider.cs
    [ProviderAlias("ServerLoggerProvider")]
    public class ServerLoggerProvider : ILoggerProvider
    {
        public readonly ServerLoggerProviderOptions Options;
        public ServerLoggerProvider(IOptions<ServerLoggerProviderOptions> _options)
        {
            Options = _options.Value;
        }

        public ILogger CreateLogger(string categoryName)
        {
            return new ServerLogger(this);
        }

        public void Dispose()
        {
        }

    }

    public class ServerLogger: ILogger
    {
        private static ILoggerOutput? LoggerOutput = null;
        public static void SetLoggerOutput(ILoggerOutput loggerOutput) => LoggerOutput = loggerOutput;

        protected readonly ServerLoggerProvider _serverLoggerProvider;

        public ServerLogger([NotNull] ServerLoggerProvider serverLoggerProvider)
        {
            _serverLoggerProvider = serverLoggerProvider;
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return logLevel != LogLevel.None;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }

            var logRecord = string.Format("{0} [{1}] {2} {3}", "[" + DateTimeOffset.UtcNow.ToString("yyyy-MM-dd HH:mm:ss+00:00") + "]", logLevel.ToString(), formatter(state, exception), exception != null ? exception.StackTrace : "");
            LoggerOutput?.Write(logRecord);
        }
    }
    public static class ServerLoggerExtensions
    {
        public static ILoggingBuilder AddServerLogger(this ILoggingBuilder builder, Action<ServerLoggerProviderOptions> configure)
        {
            builder.Services.AddSingleton<ILoggerProvider, ServerLoggerProvider>();
            builder.Services.Configure(configure);
            return builder;
        }
    }
}
