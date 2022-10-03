export namespace ui.ctrl {

    export interface IViewOptions {
        id: string;
        url: string;
    }

    export class View {

        constructor(opt :IViewOptions) {
            //super();
            this._opt = opt;
            this.InitOptions();
        }

        _el  :HTMLElement;
        _opt :IViewOptions;

        get Element(): HTMLElement {
            return this._el;
        }

        InitOptions() {
            if (!this._opt)
                return;

            if (this._opt.id)
                this._el = document.getElementById(this._opt.id);
        }
    }

}