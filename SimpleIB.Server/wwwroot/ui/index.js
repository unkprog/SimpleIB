import { Application } from "./application.js";
export var app;
(function (app_1) {
    let app;
    window.addEventListener('load', function (e) {
        if (document.readyState === "complete") {
            app = new Application();
            app.Init();
            app.Welcome();
            app.Loader(false);
        }
    });
})(app || (app = {}));
//# sourceMappingURL=index.js.map