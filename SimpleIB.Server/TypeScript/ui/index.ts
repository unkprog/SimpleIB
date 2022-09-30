export namespace app {

    class Application {
        constructor() {

        }

        _loader: HTMLElement;

        Init() {
            this._loader = document.getElementById("sib-app-loader");
        }

        Loader(show: boolean) {
            if (this._loader)
                this._loader.style.display = (show === true ? "display" : "none");
        }

    };

    window.addEventListener('load', function (event) {
        if (document.readyState === "complete") {
            let app = new Application();
            app.Init();
            app.Loader(false);
        }
    });




    const loadView = async (aView) => {
        try {
            const url = 'https://raw.githubusercontent.com/benjamin-hg-marchant/datasets/main/modis_cloud_phase_time_series_analysis.json'

            const res = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache'
            });
            const data = await res.json();
            //console.log(data);
            return data;
        } catch (err) {
            console.error(err)
        }
    };

    //loadView().then((data) => console.log(data));
}