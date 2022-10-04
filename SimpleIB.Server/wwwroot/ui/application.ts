import { appViews } from "./util/vars.js";

export class Application {
    constructor() {

    }

    _app: HTMLElement;
    _loader: HTMLElement;

    Init() {
        this._app = document.getElementById("sib-app");
        this._loader = document.getElementById("sib-app-loader");

        this.addCss();
    }

    private addCss() {
        let css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = './ui/ctrl/controls.css';

        let heads = document.getElementsByTagName('head');
        heads[heads.length - 1].appendChild(css);
    }

    Loader(show: boolean) {
        if (this._loader)
            this._loader.style.display = (show === true ? "display" : "none");
    }

    async OpenView(viewName: string, toElemenet: HTMLElement) {
        let curEl: HTMLElement = toElemenet || this._app;
        if (!curEl) {
            console.error('Не задан #Root элемент!');
            return;
        }
        (async () => {
            const viewRequest = { ViewName: viewName };
            const contentResponse = await fetch('/api/view/open', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(viewRequest)
            }).catch(this.OpenViewError);
            const viewResponse = await contentResponse.json();

            //let html: string = '';

            //html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" />';
            //if (viewResponse.css === true)
            //    html += '<link href="/ui/views/' + viewName + '.css" rel="stylesheet" />';

            //html += viewResponse.html;
            //if (viewResponse.js === true)
            //    html += '<script type="module" src="/ui/views/welcome.js async"></script>';

            curEl.innerHTML = viewResponse.html;

            let view: HTMLElement = curEl.querySelector('.view')
            //var codes = curEl.getElementsByTagName("script");
            //for (var i = 0; i < codes.length; i++) {
               // eval(codes[i].outerHTML);
                var newScript = document.createElement("script");
            newScript.src = '/ui/views/' + viewName + '.html.js';
            newScript.type = 'module';

                curEl.appendChild(newScript);
            //}  

            let curCView = appViews.Find(viewName);
            if (curCView) {
                curCView.Init({ el: view });
                curCView.Show();
            }
        })();
    }

    OpenViewError(err) {
        console.warn(err);
        return new Response(JSON.stringify({
            code: 400,
            message: 'Stupid network Error'
        }));
    }

    Welcome() {
        this.OpenView('welcome', this._app);
    }

}
