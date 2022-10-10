import * as ctrl from "../ctrl/view.js";

namespace ui.views {

    export class WelcomeView extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);

            let self = this;

            (async () => {

                const contentResponse = await fetch('/api/admin/welcome').catch(window.app.OpenViewError);
                const viewResponse = await contentResponse.json();
                self.DrawWelcome(viewResponse);
               
            })();
        }

        DrawWelcome(viewResponse: any) {
            let self = this;
            let listServers = viewResponse.servers;

            let html = '';
            for (let i = 0, icount = listServers?.length; i < icount; i++) {
                html = '<li id="srv-' + listServers[i].id + '">' + listServers[i].name + '</li>';
            }

            self._el.querySelector('#listServers').innerHTML = html;

            let listDatabases = viewResponse.databases;

            html = '';
            for (let i = 0, icount = listDatabases?.length; i < icount; i++) {
                html = '<li id="db-' + listDatabases[i].id + '">' + listDatabases[i].name + '</li>';
            }

            self._el.querySelector('#listDatabases').innerHTML = html;
        }
    }

    window.app.RegViews.Register("welcome", function (): IView { return new WelcomeView(); });
}