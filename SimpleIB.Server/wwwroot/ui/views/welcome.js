import * as ctrl from "../ctrl/view.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        class WelcomeView extends ctrl.ui.ctrl.View {
            constructor(opt) {
                super(opt);
            }
        }
        views.WelcomeView = WelcomeView;
        var v;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=welcome.js.map