import * as ctrl from "../ctrl/view.js";
import { appViews } from "../util/vars.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        class WelcomeView extends ctrl.ui.ctrl.View {
            constructor() {
                super();
            }
        }
        views.WelcomeView = WelcomeView;
        appViews.Register("welcome", function () { return new WelcomeView(); });
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=welcome.js.map