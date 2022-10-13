import * as ctrl from "../../ctrl/view.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        var modals;
        (function (modals) {
            class ViewModal extends ctrl.ui.ctrl.View {
                constructor() {
                    super();
                }
                Init(opt) {
                    super.Init(opt);
                    let self = this;
                    self._el.querySelector('#window-modal-button-ok').addEventListener('click', self.ClickOk.bind(self));
                }
                ClickOk(e) {
                    this.Close();
                }
            }
            modals.ViewModal = ViewModal;
            window.app.RegViews.Register("modals/viewmodal", function () { return new ViewModal(); });
        })(modals = views.modals || (views.modals = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=viewmodal.html.js.map