import { AppViews } from "./appviews.js";

export class Application {
    constructor() {
        this.RegViews = new AppViews();
    }

    private _app: HTMLElement;
    private _loader: HTMLElement;

    readonly RegViews: AppViews;

    Init() {
        this._app = document.getElementById("sib-app");
        this._loader = document.getElementById("sib-app-loader");

        this.addCss();
    }

    private addCss() {
        let heads = document.getElementsByTagName('head'), css;

        css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = './ui/ctrl/materialicons.css';
        heads[heads.length - 1].appendChild(css);

        css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = './ui/ctrl/controls.css';
        heads[heads.length - 1].appendChild(css);

    }

    Loader(show: boolean) {
        if (this._loader)
            this._loader.style.display = (show === true ? "display" : "none");
    }

    async OpenView(viewName: string, toElemenet: HTMLElement) {
        let self = this;
        let curEl: HTMLElement = toElemenet || self._app;
        if (!curEl) {
            console.error('Не задан #Root элемент!');
            return;
        }
        (async () => {
            const viewRequest = { ViewName: viewName };
            const contentResponse = await fetch('/api/view/open', {
                cache: "no-cache",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(viewRequest)
            }).catch(self.OpenViewError);
            const viewResponse = await contentResponse.json();

            curEl.innerHTML = viewResponse.html;

            const showView = function () {
                let curCView = self.RegViews.Find(viewName);
                if (curCView) {
                    let view: HTMLElement = curEl.querySelector('.view')
                    curCView.Init({ el: view });
                    curCView.Show();
                }
            }

            if (viewResponse.js === true) {
                var newScript = document.createElement("script");
                newScript.src = '/ui/views/' + viewName + '.html.js';
                newScript.type = 'module';
                newScript.addEventListener('load', showView)
                curEl.appendChild(newScript);
            }
            else
                showView();
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



