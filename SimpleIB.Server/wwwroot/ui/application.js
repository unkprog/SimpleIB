var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AppViews } from "./appviews.js";
export class Application {
    constructor() {
        this.RegViews = new AppViews();
    }
    Init() {
        this._app = document.getElementById("sib-app");
        this._loader = document.getElementById("sib-app-loader");
        this.addCss();
    }
    addCss() {
        let css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = './ui/ctrl/controls.css';
        let heads = document.getElementsByTagName('head');
        heads[heads.length - 1].appendChild(css);
    }
    Loader(show) {
        if (this._loader)
            this._loader.style.display = (show === true ? "display" : "none");
    }
    OpenView(viewName, toElemenet) {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            let curEl = toElemenet || self._app;
            if (!curEl) {
                console.error('Не задан #Root элемент!');
                return;
            }
            (() => __awaiter(this, void 0, void 0, function* () {
                const viewRequest = { ViewName: viewName };
                const contentResponse = yield fetch('/api/view/open', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(viewRequest)
                }).catch(self.OpenViewError);
                const viewResponse = yield contentResponse.json();
                curEl.innerHTML = viewResponse.html;
                const showView = function () {
                    let curCView = self.RegViews.Find(viewName);
                    if (curCView) {
                        let view = curEl.querySelector('.view');
                        curCView.Init({ el: view });
                        curCView.Show();
                    }
                };
                if (viewResponse.js === true) {
                    var newScript = document.createElement("script");
                    newScript.src = '/ui/views/' + viewName + '.html.js';
                    newScript.type = 'module';
                    newScript.addEventListener('load', showView);
                    curEl.appendChild(newScript);
                }
                else
                    showView();
            }))();
        });
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
//# sourceMappingURL=application.js.map