import * as ctrl from "../ctrl/view.js";
import { appViews } from "../util/vars.js";

namespace ui.views {

    export class WelcomeView extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);

            Promise.all([
                fetch('/api/admin/servers'),
                fetch('/api/admin/bases')
            ]).then(responses =>
                Promise.all(responses.map(response => response.json()))
            ).then(data =>
                console.log(data)
            ).catch(err =>
                console.log(err)
            );
        }
    }

    appViews.Register("welcome", function (): IView { return new WelcomeView(); });
    
}