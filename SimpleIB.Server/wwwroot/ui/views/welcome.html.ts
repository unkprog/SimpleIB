import * as ctrl from "../ctrl/view.js";
import { appViews } from "../util/vars.js";

namespace ui.views {

    export class WelcomeView extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }
    }

    appViews.Register("welcome", function (): IView { return new WelcomeView(); });
    
}