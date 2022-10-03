export namespace ui.ctrl {
    export class View implements IView {

        constructor() {
           //super();
        }

        _el  :HTMLElement;
        _opt :IViewOptions;

        get Element(): HTMLElement {
            return this._el;
        }

        InitOptions(opt: IViewOptions) {
            this._opt = opt;

            if (!this._opt)
                return;

            if (this._opt.id)
                this._el = document.getElementById(this._opt.id);
            else
                this._el = this._opt.el;
        }
    }

}