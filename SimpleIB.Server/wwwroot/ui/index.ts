export namespace app {

    class Application {
        constructor() {

        }

        _app: HTMLElement;
        _loader: HTMLElement;

        Init() {
            this._app = document.getElementById("sib-app");
            this._loader = document.getElementById("sib-app-loader");
        }


        Loader(show: boolean) {
            if (this._loader)
                this._loader.style.display = (show === true ? "display" : "none");
        }

        async OpenView(viewName: string, toElemenet: HTMLElement) {
            const viewRequest = { Path: viewName };
            const contentResponse = await fetch('/api/view/open', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(viewRequest)
            }).catch(this.OpenViewError);
            const viewResponse = await contentResponse.json();
            let curEl: HTMLElement = toElemenet || this._app;
            let html: string = '';

            html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" />';
            if (viewResponse.css === true)
                html += '<link href="/ui/views/welcome.css" rel="stylesheet" />';

            html += viewResponse.html;
            if (viewResponse.js === true)
                html += '<script type="module" src="/ui/views/welcome.js"></script>';

            curEl.innerHTML = html;
            
            let view: HTMLElement = curEl.querySelector('.view')
            view.style.display = 'block';
        }

        OpenViewError(err) {
            console.warn(err);
            return new Response(JSON.stringify({
                code: 400,
                message: 'Stupid network Error'
            }));
        }
    
        Welcome() {
            (async () => {
                const rawResponse = await fetch('/api/view/open', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Path: 'welcome' })
                });
                const content = await rawResponse.json();
                let html: string = '';

                html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" />';
                if (content.css === true)
                    html += '<link href="/ui/views/welcome.css" rel="stylesheet" />';

                html += content.html;
                if (content.js === true)
                html += '<script type="module" src="/ui/views/welcome.js"></script>';

                if (this._app)
                    this._app.innerHTML = html;
 
            })();
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