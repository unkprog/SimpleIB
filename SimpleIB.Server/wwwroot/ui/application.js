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
import * as tr from "./util/translate.js";
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
    Loader(show) {
        if (this._loader)
            this._loader.style.display = (show === true ? "display" : "none");
    }
    OpenViewAsync(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            let viewEl = opt.toElement;
            if (!viewEl) {
                console.error('Не задан #Root элемент!');
                return;
            }
            (() => __awaiter(this, void 0, void 0, function* () {
                const viewRequest = { ViewName: opt.viewName };
                const contentResponse = yield fetch('/api/view/open', {
                    cache: "no-cache",
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(viewRequest)
                }).catch(self.OpenViewError);
                const viewResponse = yield contentResponse.json();
                viewEl.innerHTML = viewResponse.html;
                tr.util.tr.translateView(viewEl);
                const viewInitShow = function () {
                    let constructorView = self.RegViews.Find(opt.viewName);
                    if (constructorView) {
                        let view = constructorView();
                        view.OnInit = opt.onInit;
                        view.OnShow = opt.onShow;
                        view.OnClose = opt.onClose;
                        view.OnDestroy = opt.onDestroy;
                        viewEl.id = 'view_' + self.RegViews.IncCid;
                        view.Init({ id: viewEl.id, el: viewEl });
                        self.RegViews.Add(view);
                        if (opt.isShow == undefined || opt.isShow === true)
                            view.Show();
                    }
                };
                if (viewResponse.js === true) {
                    var newScript = document.createElement("script");
                    newScript.src = '/ui/views/' + opt.viewName + '.html.js';
                    newScript.type = 'module';
                    newScript.addEventListener('load', viewInitShow);
                    viewEl.appendChild(newScript);
                }
                else
                    viewInitShow();
            }))();
        });
    }
    CreateViewElement(className) {
        let result = document.createElement("div");
        result.className = className;
        result.style.display = "none";
        this._app.appendChild(result);
        return result;
    }
    OpenView(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!opt.toElement)
                opt.toElement = this.CreateViewElement('view');
            this.OpenViewAsync(opt);
        });
    }
    OpenViewModal(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!opt.toElement)
                opt.toElement = this.CreateViewElement('view-modal');
            this.OpenViewAsync(opt);
        });
    }
    CloseView(view) {
        this.RegViews.Del(view);
        const viewEl = view.Element;
        viewEl.remove();
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
        this.OpenView({ viewName: 'welcome' });
    }
}
//# sourceMappingURL=application.js.map