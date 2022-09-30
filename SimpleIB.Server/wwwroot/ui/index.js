var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export var app;
(function (app_1) {
    class Application {
        constructor() {
        }
        Init() {
            this._loader = document.getElementById("sib-app-loader");
        }
        Loader(show) {
            if (this._loader)
                this._loader.style.display = (show === true ? "display" : "none");
        }
    }
    ;
    window.addEventListener('load', function (event) {
        if (document.readyState === "complete") {
            let app = new Application();
            app.Init();
            app.Loader(false);
        }
    });
    const loadView = (aView) => __awaiter(this, void 0, void 0, function* () {
        try {
            const url = 'https://raw.githubusercontent.com/benjamin-hg-marchant/datasets/main/modis_cloud_phase_time_series_analysis.json';
            const res = yield fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });
            const data = yield res.json();
            //console.log(data);
            return data;
        }
        catch (err) {
            console.error(err);
        }
    });
    //loadView().then((data) => console.log(data));
})(app || (app = {}));
//# sourceMappingURL=index.js.map