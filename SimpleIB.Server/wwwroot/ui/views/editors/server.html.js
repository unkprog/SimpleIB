import * as ctrl from "../../ctrl/view.js";
var ui;
(function (ui) {
    var editors;
    (function (editors) {
        var views;
        (function (views) {
            class ServerView extends ctrl.ui.ctrl.View {
                constructor() {
                    super();
                }
                Init(opt) {
                    super.Init(opt);
                }
                DoInitEvents() {
                    super.DoInitEvents();
                }
                DoDestroyEvents() {
                    super.DoDestroyEvents();
                }
            }
            views.ServerView = ServerView;
            window.app.RegViews.Register("editors/server", function () { return new ServerView(); });
        })(views = editors.views || (editors.views = {}));
    })(editors = ui.editors || (ui.editors = {}));
})(ui || (ui = {}));
//# sourceMappingURL=server.html.js.map