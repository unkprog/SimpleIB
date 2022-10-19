import * as view from "../../ctrl/view.js";

namespace ui.views.modals {

    export class ViewModal extends view.ui.ctrl.View implements IViewModal  {
        constructor() {
            super();
        }

        private _divHeader: HTMLElement;
        private _divContent: HTMLElement;
        private _btnOk: HTMLElement;
        private _btnClose: HTMLElement;

        set Header(aValue: string) {
            this._divHeader.innerHTML = aValue;
        }

        get Content(): HTMLElement {
            return this._divContent;
        }

        override DoInit() {
            super.DoInit();
            let self = this;
            self._divHeader = self._el.querySelector('.header-modal');
            self._divContent = self._el.querySelector('.content-modal');
            self._btnOk = self._el.querySelector('#window-modal-button-ok');
            self._btnClose = self._el.querySelector('#window-modal-button-close');
        }

        override DoInitEvents() {
            super.DoInitEvents();
            let self = this;
            self.BindEvent(self._btnOk, 'click', self.ClickOk);
            self.BindEvent(self._btnClose, 'click', self.ClickClose);
        }

        override DoDestroyEvents() {
            super.DoInitEvents();
            let self = this;
            self.UnbindEvent(self._btnOk, 'click');
            self.UnbindEvent(self._btnClose, 'click');
        }

        ClickClose(e: any) {
            this._modalResult = view.ui.ctrl.EnumViewModalResult.Close;
            this.Close();
        }

        ClickOk(e: any) {
            this._modalResult = view.ui.ctrl.EnumViewModalResult.Ok;
            this.Close();
        }
    }

    window.app.RegViews.Register("modals/viewmodal", function (): IView { return new ViewModal(); });
}