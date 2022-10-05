/// <reference path="int/iview.d.ts" />

import { Application } from "./application.js"

export namespace sib {


    window.addEventListener('load', function (e) {
        if (document.readyState === "complete") {
            window.app = new Application();
            window.app.Init();
            window.app.Welcome();
            window.app.Loader(false);
        }
    });

}