var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ctrl from "../ctrl/view.js";
var ui;
(function (ui) {
    var views;
    (function (views) {
        class WelcomeView extends ctrl.ui.ctrl.View {
            constructor() {
                super();
            }
            Init(opt) {
                super.Init(opt);
                (() => __awaiter(this, void 0, void 0, function* () {
                    const contentResponse = yield fetch('/api/admin/welcome').catch(window.app.OpenViewError);
                    const viewResponse = yield contentResponse.json();
                    console.log(viewResponse);
                }))();
            }
        }
        views.WelcomeView = WelcomeView;
        window.app.RegViews.Register("welcome", function () { return new WelcomeView(); });
        //appVars.appViews.Register("welcome", function (): IView { return new WelcomeView(); });
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=welcome.html.js.map