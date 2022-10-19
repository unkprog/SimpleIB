import * as view from "../../ctrl/view.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        var modals;
        (function (modals) {
            class ViewModal extends view.ui.ctrl.View {
                constructor() {
                    super();
                }
                set Header(aValue) {
                    this._divHeader.innerHTML = aValue;
                }
                get Content() {
                    return this._divContent;
                }
                DoInit() {
                    super.DoInit();
                    let self = this;
                    self._divHeader = self._el.querySelector('.header-modal');
                    self._divContent = self._el.querySelector('.content-modal');
                    self._btnOk = self._el.querySelector('#window-modal-button-ok');
                    self._btnClose = self._el.querySelector('#window-modal-button-close');
                }
                DoInitEvents() {
                    super.DoInitEvents();
                    let self = this;
                    self.BindEvent(self._btnOk, 'click', self.ClickOk);
                    self.BindEvent(self._btnClose, 'click', self.ClickClose);
                }
                DoDestroyEvents() {
                    super.DoInitEvents();
                    let self = this;
                    self.UnbindEvent(self._btnOk, 'click');
                    self.UnbindEvent(self._btnClose, 'click');
                }
                ClickClose(e) {
                    this._modalResult = view.ui.ctrl.EnumViewModalResult.Close;
                    this.Close();
                }
                ClickOk(e) {
                    this._modalResult = view.ui.ctrl.EnumViewModalResult.Ok;
                    this.Close();
                }
            }
            modals.ViewModal = ViewModal;
            window.app.RegViews.Register("modals/viewmodal", function () { return new ViewModal(); });
        })(modals = views.modals || (views.modals = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=viewmodal.html.js.map