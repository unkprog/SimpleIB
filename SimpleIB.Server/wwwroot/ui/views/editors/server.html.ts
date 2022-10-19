import * as ctrl from "../../ctrl/view.js";

namespace ui.editors.views {

    export class ServerView extends ctrl.ui.ctrl.View {
        constructor() {
            super();
        }

        Init(opt: IViewParams) {
            super.Init(opt);

        }

        override DoInitEvents() {
            super.DoInitEvents();

        }

        override DoDestroyEvents() {
            super.DoDestroyEvents();
           
        }

    }

    window.app.RegViews.Register("editors/server", function (): IView { return new ServerView(); });
}