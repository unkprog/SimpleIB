import * as ctrl from "../../ctrl/view.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        var modals;
        (function (modals) {
            let EnumViewModalResult;
            (function (EnumViewModalResult) {
                EnumViewModalResult[EnumViewModalResult["Close"] = -1] = "Close";
                EnumViewModalResult[EnumViewModalResult["Ok"] = 0] = "Ok";
            })(EnumViewModalResult = modals.EnumViewModalResult || (modals.EnumViewModalResult = {}));
            class ViewModal extends ctrl.ui.ctrl.View {
                constructor() {
                    super();
                }
                Init(opt) {
                    super.Init(opt);
                    this._modalResult = 0;
                }
                DoInitEvents() {
                    super.DoInitEvents();
                    let self = this;
                    self._btnOk = self._el.querySelector('#window-modal-button-ok');
                    self._btnClose = self._el.querySelector('#window-modal-button-close');
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
                    this._modalResult = EnumViewModalResult.Close;
                    this.Close();
                }
                ClickOk(e) {
                    this._modalResult = EnumViewModalResult.Ok;
                    this.Close();
                }
                get ModalResult() {
                    return this._modalResult;
                }
            }
            modals.ViewModal = ViewModal;
            window.app.RegViews.Register("modals/viewmodal", function () { return new ViewModal(); });
        })(modals = views.modals || (views.modals = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=viewmodal.html.js.map