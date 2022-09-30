export namespace app {

    class Application {
        constructor() {

        }

        _app: HTMLElement;
        _loader: HTMLElement;

        Init() {
            this._app    = document.getElementById("sib-app");
            this._loader = document.getElementById("sib-app-loader");
        }


        Loader(show: boolean) {
            if (this._loader)
                this._loader.style.display = (show === true ? "display" : "none");
        }

        Welcome() {

            let html: string = '';

            html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" async />';
            html += '<link href="/ui/views/welcome.css" rel="stylesheet" async />';
            html += '<include src="/ui/views/welcome.html"></include>';
            html += '<script src="/ui/views/welcome.js" async></script>';

            if (this._app)
                this._app.innerHTML = html;

        }

    };

    window.addEventListener('load', function (event) {
        if (document.readyState === "complete") {
            let app = new Application();
            app.Init();
            app.Welcome();
            app.Loader(false);
        }
    });

}