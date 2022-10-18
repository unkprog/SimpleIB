﻿import { AppViews } from "./appviews.js";

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

    private async OpenViewAsync(opt :IOpenViewParams) {
        let self = this;
        let viewEl: HTMLElement = opt.toElement;

        if (!viewEl) {
            console.error('Не задан #Root элемент!');
            return;
        }

        (async () => {
            const viewRequest = { ViewName: opt.viewName };
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

            viewEl.innerHTML = viewResponse.html;

            const viewInitShow = function () {
                let constructorView = self.RegViews.Find(opt.viewName);
                if (constructorView) {
                    let view: IView = constructorView();
                    viewEl.id = 'view_' + self.RegViews.IncCid;
                    view.Init({ id: viewEl.id, el: viewEl });
                    self.RegViews.Add(view);
                    view.Show();
                }
            }

            if (viewResponse.js === true) {
                var newScript = document.createElement("script");
                newScript.src = '/ui/views/' + opt.viewName + '.html.js';
                newScript.type = 'module';
                newScript.addEventListener('load', viewInitShow);
                viewEl.appendChild(newScript);
            }
            else
                viewInitShow();
        })();
    }

    private CreateViewElement(className: string): HTMLElement {
        let result: HTMLElement = document.createElement("div");
        result.className = className;
        this._app.appendChild(result);
        return result;
    }

    async OpenView(viewName: string) {
        this.OpenViewAsync({ viewName: viewName, toElement: this.CreateViewElement('view') });
    }

    async OpenViewModal(viewName: string) {
        this.OpenViewAsync({ viewName: viewName, toElement: this.CreateViewElement('view-modal') });
    }

    CloseView(view: IView) {
        this.RegViews.Del(view);
        view.Destroy();
    }

    OpenViewError(err) {
        console.warn(err);
        return new Response(JSON.stringify({
            code: 400,
            message: 'Stupid network Error'
        }));
    }

    Welcome() {
        this.OpenView('welcome');
    }

}



