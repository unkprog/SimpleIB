import * as ctrl from "../../ctrl/view.js";

namespace ui.views.modals {

    export class ViewModal extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        private _proxyClickOk: any;
        private _proxyClickClose: any;

        Init(opt: IViewParams) {
            super.Init(opt);
        }


        override DoInitEvents() {
            super.DoInitEvents();
            let self = this;
            self._proxyClickClose = self.BindEvent(self._el.querySelector('#window-modal-button-close'), 'click', self.ClickClose);

            //EventListenerOrEventListenerObject
            //self._el.querySelector('#window-modal-button-close').addEventListener('click', self._proxyClickClose);
            self._proxyClickOk = self.ClickOk.bind(self);
            self._el.querySelector('#window-modal-button-ok').addEventListener('click', self._proxyClickOk);
        }

        override DoDestroyEvents() {
            super.DoInitEvents();
            let self = this;
            self._el.querySelector('#window-modal-button-ok').removeEventListener('click', self._proxyClickOk);
            self._proxyClickOk = undefined;
            //self._el.querySelector('#window-modal-button-close').removeEventListener('click', self._proxyClickClose);
            //self._proxyClickClose = undefined;
            self._proxyClickClose = self.UnbindEvent(self._el.querySelector('#window-modal-button-close'), 'click', self._proxyClickClose);
        }

        ClickClose(e: any) {
            this.Close();
        }

        ClickOk(e: any) {
            this.Close();
        }
    }

    window.app.RegViews.Register("modals/viewmodal", function (): IView { return new ViewModal(); });
}