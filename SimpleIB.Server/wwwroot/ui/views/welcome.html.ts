import * as ctrl from "../ctrl/view.js";

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

        DrawWelcome(viewResponse: any) {
            var self = this;
            let listServers = viewResponse.servers;

            let html = '';
            for (let i = 0, icount = listServers?.length; i < icount; i++) {
                html += '<button id="srv-' + listServers[i].id + '" class="button icon"><i class="material-icons">' + (listServers[i].id > 0 ? 'laptop_windows' : 'add') + '</i><span class="caption">' + listServers[i].name + '</span></button>';
            }
            self._el.querySelector('#listServers').innerHTML = html;

            let listDatabases = viewResponse.databases;

            html = '';
            for (let i = 0, icount = listDatabases?.length; i < icount; i++) {
                html += '<button id="db-' + listDatabases[i].id + '" class="button icon"><i class="material-icons">' + (listDatabases[i].id > 0 ? 'storage' : 'add') + '</i><span class="caption">' + listDatabases[i].name + '</span></button>';
            }
            self._el.querySelector('#listDatabases').innerHTML = html;

            //let el: HTMLElement =
            self._el.querySelector('#listServers').children[0].addEventListener('click', this.ClickFunc);
        }

        ClickFunc(e: any) {
            window.app.OpenViewModal('modals/viewmodal');
            //alert('click!!!');
        }
    }

    window.app.RegViews.Register("welcome", function (): IView { return new WelcomeView(); });
}