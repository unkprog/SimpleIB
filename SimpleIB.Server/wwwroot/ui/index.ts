import { Application } from "./application.js"

export namespace app {

    let app: Application;

    window.addEventListener('load', function (e) {
        if (document.readyState === "complete") {
            app = new Application();
            app.Init();
            app.Welcome();
            app.Loader(false);
        }
    });

}