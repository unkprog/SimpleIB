import * as ctrl from "../ctrl/view.js";
import * as tr from "../util/translate.js";

namespace ui.views {

    export class WelcomeView extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);

            var self = this;

            (async () => {

                const contentResponse = await fetch('/api/admin/welcome').catch(window.app.OpenViewError);
                const viewResponse = await contentResponse.json();
                self.DrawWelcome(viewResponse);
               
            })();
        }


        private _serverItems: any;
        private _databaseItems: any;

        DrawWelcome(viewResponse: any) {
            var self = this;
            let listServers = viewResponse.servers;

            let html = '';
            for (let i = 0, icount = listServers?.length; i < icount; i++) {
                html += '<button data-id="' + listServers[i].id + '" class="server-item button icon"><i class="material-icons">' + (listServers[i].id > 0 ? 'laptop_windows' : 'add') + '</i><span class="caption">' + listServers[i].name + '</span></button>';
            }
            let listServersEl = self._el.querySelector('#listServers');
            listServersEl.innerHTML = html;

            self._serverItems = listServersEl.querySelectorAll('.server-item')

            self._serverItems?.forEach(item => {
                self.BindEvent(item, 'click', self.ClickServerItem);
            });

            let listDatabases = viewResponse.databases;

            html = '';
            for (let i = 0, icount = listDatabases?.length; i < icount; i++) {
                html += '<button data-id="' + listDatabases[i].id + '" class="database-item button icon"><i class="material-icons">' + (listDatabases[i].id > 0 ? 'storage' : 'add') + '</i><span class="caption">' + listDatabases[i].name + '</span></button>';
            }
            let listDtabasesEl = self._el.querySelector('#listDatabases');
            listDtabasesEl.innerHTML = html;

            self._databaseItems = listDtabasesEl.querySelectorAll('.database-item');
            self._databaseItems?.forEach(item => {
                self.BindEvent(item, 'click', self.ClickDatabaseItem);
            });
        }

        ClickServerItem(e: any) {
            if (e.currentTarget.dataset.id == 0)
                window.app.OpenViewModal({ viewName: 'modals/viewmodal', onInit: this.loadServerEdit });
            else
                alert(e.currentTarget.dataset.id);
        }

        loadServerEdit(view: any) {
            view.self.Header = tr.util.tr.T('$addserver');
            window.app.OpenView({ viewName: 'editors/server', toElement: view.self.Content });
        }

        ClickDatabaseItem(e: any) {
            if (e.currentTarget.dataset.id == 0)
                window.app.OpenViewModal({ viewName: 'modals/viewmodal' });
            else
                alert(e.currentTarget.dataset.id);
        }

        

        override DoDestroyEvents() {
            super.DoDestroyEvents();
            let self = this;
            self._serverItems?.forEach(item => {
                self.UnbindEvent(item, 'click');
            });
            self._databaseItems?.forEach(item => {
                self.UnbindEvent(item, 'click');
            });
        }

    }

    window.app.RegViews.Register("welcome", function (): IView { return new WelcomeView(); });
}