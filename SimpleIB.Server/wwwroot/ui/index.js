var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        OpenView(viewName, toElemenet) {
            return __awaiter(this, void 0, void 0, function* () {
                const viewRequest = { Path: viewName };
                const contentResponse = yield fetch('/api/view/open', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(viewRequest)
                }).catch(this.OpenViewError);
                const viewResponse = yield contentResponse.json();
                let html = '';
                html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" />';
                if (viewResponse.css === true)
                    html += '<link href="/ui/views/welcome.css" rel="stylesheet" />';
                html += viewResponse.html;
                if (viewResponse.js === true)
                    html += '<script type="module" src="/ui/views/welcome.js"></script>';
                if (toElemenet)
                    toElemenet.innerHTML = html;
                else if (this._app)
                    this._app.innerHTML = html;
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
            (() => __awaiter(this, void 0, void 0, function* () {
                const rawResponse = yield fetch('/api/view/open', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Path: 'welcome' })
                });
                const content = yield rawResponse.json();
                let html = '';
                html += '<link href="/ui/ctrl/controls.css" rel="stylesheet" />';
                if (content.css === true)
                    html += '<link href="/ui/views/welcome.css" rel="stylesheet" />';
                html += content.html;
                if (content.js === true)
                    html += '<script type="module" src="/ui/views/welcome.js"></script>';
                if (this._app)
                    this._app.innerHTML = html;
            }))();
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
//# sourceMappingURL=index.js.map