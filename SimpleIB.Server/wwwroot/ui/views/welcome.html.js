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
import * as tr from "../util/translate.js";
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
                var self = this;
                (() => __awaiter(this, void 0, void 0, function* () {
                    const contentResponse = yield fetch('/api/admin/welcome').catch(window.app.OpenViewError);
                    const viewResponse = yield contentResponse.json();
                    self.DrawWelcome(viewResponse);
                }))();
            }
            DrawWelcome(viewResponse) {
                var _a, _b;
                var self = this;
                let listServers = viewResponse.servers;
                let html = '';
                for (let i = 0, icount = listServers === null || listServers === void 0 ? void 0 : listServers.length; i < icount; i++) {
                    html += '<button data-id="' + listServers[i].id + '" class="server-item button icon"><i class="material-icons">' + (listServers[i].id > 0 ? 'laptop_windows' : 'add') + '</i><span class="caption">' + listServers[i].name + '</span></button>';
                }
                let listServersEl = self._el.querySelector('#listServers');
                listServersEl.innerHTML = html;
                self._serverItems = listServersEl.querySelectorAll('.server-item');
                (_a = self._serverItems) === null || _a === void 0 ? void 0 : _a.forEach(item => {
                    self.BindEvent(item, 'click', self.ClickServerItem);
                });
                let listDatabases = viewResponse.databases;
                html = '';
                for (let i = 0, icount = listDatabases === null || listDatabases === void 0 ? void 0 : listDatabases.length; i < icount; i++) {
                    html += '<button data-id="' + listDatabases[i].id + '" class="database-item button icon"><i class="material-icons">' + (listDatabases[i].id > 0 ? 'storage' : 'add') + '</i><span class="caption">' + listDatabases[i].name + '</span></button>';
                }
                let listDtabasesEl = self._el.querySelector('#listDatabases');
                listDtabasesEl.innerHTML = html;
                self._databaseItems = listDtabasesEl.querySelectorAll('.database-item');
                (_b = self._databaseItems) === null || _b === void 0 ? void 0 : _b.forEach(item => {
                    self.BindEvent(item, 'click', self.ClickDatabaseItem);
                });
            }
            ClickServerItem(e) {
                if (e.currentTarget.dataset.id == 0) {
                    const opt = { viewName: 'modals/viewmodal', isShow: false, onInit: this.loadServerEdit };
                    window.app.OpenViewModal(opt);
                }
                else
                    alert(e.currentTarget.dataset.id);
            }
            loadServerEdit(view) {
                const modal = view.self;
                modal.Header = tr.util.tr.T('$addserver');
                window.app.OpenView({ viewName: 'editors/server', toElement: view.self.Content, onInit: (view) => { modal.Show(); } });
            }
            ClickDatabaseItem(e) {
                if (e.currentTarget.dataset.id == 0)
                    window.app.OpenViewModal({ viewName: 'modals/viewmodal' });
                else
                    alert(e.currentTarget.dataset.id);
            }
            DoDestroyEvents() {
                var _a, _b;
                super.DoDestroyEvents();
                let self = this;
                (_a = self._serverItems) === null || _a === void 0 ? void 0 : _a.forEach(item => {
                    self.UnbindEvent(item, 'click');
                });
                (_b = self._databaseItems) === null || _b === void 0 ? void 0 : _b.forEach(item => {
                    self.UnbindEvent(item, 'click');
                });
            }
        }
        views.WelcomeView = WelcomeView;
        window.app.RegViews.Register("welcome", function () { return new WelcomeView(); });
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=welcome.html.js.map