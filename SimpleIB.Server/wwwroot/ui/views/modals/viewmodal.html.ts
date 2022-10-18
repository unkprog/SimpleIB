import * as ctrl from "../../ctrl/view.js";

namespace ui.views.modals {

    export enum EnumViewModalResult {
        Close = -1,
        Ok
    }

    export class ViewModal extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);
            this._modalResult = 0;
        }

        private _btnOk: HTMLElement;
        private _btnClose: HTMLElement;

        override DoInitEvents() {
            super.DoInitEvents();
            let self = this;
            self._btnOk = self._el.querySelector('#window-modal-button-ok');
            self._btnClose = self._el.querySelector('#window-modal-button-close');

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
            this._modalResult = EnumViewModalResult.Close;
            this.Close();
        }

        ClickOk(e: any) {
            this._modalResult = EnumViewModalResult.Ok;
            this.Close();
        }

        private _modalResult: EnumViewModalResult;
        get ModalResult(): EnumViewModalResult {
            return this._modalResult;
        } 
    }

    window.app.RegViews.Register("modals/viewmodal", function (): IView { return new ViewModal(); });
}