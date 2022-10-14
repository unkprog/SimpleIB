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
                }
                DoInitEvents() {
                    super.DoInitEvents();
                    let self = this;
                    self._proxyClickClose = self.BindEvent(self._el.querySelector('#window-modal-button-close'), 'click', self.ClickClose);
                    //EventListenerOrEventListenerObject
                    //self._el.querySelector('#window-modal-button-close').addEventListener('click', self._proxyClickClose);
                    self._proxyClickOk = self.ClickOk.bind(self);
                    self._el.querySelector('#window-modal-button-ok').addEventListener('click', self._proxyClickOk);
                }
                DoDestroyEvents() {
                    super.DoInitEvents();
                    let self = this;
                    self._el.querySelector('#window-modal-button-ok').removeEventListener('click', self._proxyClickOk);
                    self._proxyClickOk = undefined;
                    //self._el.querySelector('#window-modal-button-close').removeEventListener('click', self._proxyClickClose);
                    //self._proxyClickClose = undefined;
                    self._proxyClickClose = self.UnbindEvent(self._el.querySelector('#window-modal-button-close'), 'click', self._proxyClickClose);
                }
                ClickClose(e) {
                    this.Close();
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