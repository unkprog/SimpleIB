import * as ctrl from "../../ctrl/view.js";

namespace ui.views.modals {

    export class ViewModal extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);
        }

    }

    window.app.RegViews.Register("modals/viewmodal", function (): IView { return new ViewModal(); });
}