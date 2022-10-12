var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ctrl from "../ctrl/view.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        class WelcomeView extends ctrl.ui.ctrl.View {
            constructor() {
                super();
            }
            Init(opt) {
                super.Init(opt);
                let self = this;
                (() => __awaiter(this, void 0, void 0, function* () {
                    const contentResponse = yield fetch('/api/admin/welcome').catch(window.app.OpenViewError);
                    const viewResponse = yield contentResponse.json();
                    self.DrawWelcome(viewResponse);
                }))();
            }
            DrawWelcome(viewResponse) {
                let self = this;
                let listServers = viewResponse.servers;
                let html = '';
                for (let i = 0, icount = listServers === null || listServers === void 0 ? void 0 : listServers.length; i < icount; i++) {
                    html += '<button id="srv-' + listServers[i].id + '" class="button icon"><i class="material-icons">laptop_windows</i><span class="caption">' + listServers[i].name + '</span></button>';
                }
                self._el.querySelector('#listServers').innerHTML = html;
                let listDatabases = viewResponse.databases;
                html = '';
                for (let i = 0, icount = listDatabases === null || listDatabases === void 0 ? void 0 : listDatabases.length; i < icount; i++) {
                    html += '<button id="db-' + listDatabases[i].id + '" class="button icon"><i class="material-icons">storage</i><span class="caption">' + listDatabases[i].name + '</span></button>';
                }
                self._el.querySelector('#listDatabases').innerHTML = html;
                //let el: HTMLElement =
                self._el.querySelector('#listServers').children[0].addEventListener('click', this.ClickFunc);
            }
            ClickFunc(e) {
                window.app.OpenViewModal('modals/viewmodal');
                alert('click!!!');
            }
        }
        views.WelcomeView = WelcomeView;
        window.app.RegViews.Register("welcome", function () { return new WelcomeView(); });
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=welcome.html.js.map