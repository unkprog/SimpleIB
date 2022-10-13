import * as ctrl from "../../ctrl/view.js";

namespace ui.views.modals {

    export class ViewModal extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);

            let self = this;
            self._el.querySelector('#window-modal-button-ok').addEventListener('click', self.ClickOk.bind(self));
        }

        ClickOk(e: any) {
            this.Close();
        }
    }

    window.app.RegViews.Register("modals/viewmodal", function (): IView { return new ViewModal(); });
}