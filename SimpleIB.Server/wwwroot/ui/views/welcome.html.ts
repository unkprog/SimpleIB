import * as ctrl from "../ctrl/view.js";

namespace ui.views {

    export class WelcomeView extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);

            (async () => {

                const contentResponse = await fetch('/api/admin/welcome').catch(window.app.OpenViewError);
                const viewResponse = await contentResponse.json();
                console.log(viewResponse);
               
            })();
        }
    }

    window.app.RegViews.Register("welcome", function (): IView { return new WelcomeView(); });
    //appVars.appViews.Register("welcome", function (): IView { return new WelcomeView(); });
    
}