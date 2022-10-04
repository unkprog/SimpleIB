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
            Init(opt) {
                super.Init(opt);
                Promise.all([
                    fetch('/api/admin/servers'),
                    fetch('/api/admin/bases')
                ]).then(responses => Promise.all(responses.map(response => response.json()))).then(data => console.log(data)).catch(err => console.log(err));
            }
        }
        views.WelcomeView = WelcomeView;
        appViews.Register("welcome", function () { return new WelcomeView(); });
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=welcome.html.js.map