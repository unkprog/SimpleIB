export var app;
(function (app_1) {
    class Application {
        constructor() {
        }
        Init() {
            this._app = document.getElementById("sib-app");
            this._loader = document.getElementById("sib-app-loader");
        }
        Loader(show) {
            if (this._loader)
                this._loader.style.display = (show === true ? "display" : "none");
        }
        Welcome() {
            let html = '';
            html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" async />';
            html += '<link href="/ui/views/welcome.css" rel="stylesheet" async />';
            html += '<include src="/ui/views/welcome.html"></include>';
            html += '<script src="/ui/views/welcome.js" async></script>';
            if (this._app)
                this._app.innerHTML = html;
        }
    }
    ;
    window.addEventListener('load', function (event) {
        if (document.readyState === "complete") {
            let app = new Application();
            app.Init();
            app.Welcome();
            app.Loader(false);
        }
    });
})(app || (app = {}));
