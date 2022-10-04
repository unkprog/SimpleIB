﻿export namespace ui.ctrl {
    export class View implements IView {

        constructor() {
           //super();
        }

        _el  :HTMLElement;
        _opt: IViewParams;

        get Element(): HTMLElement {
            return this._el;
        }

        OnInit: { (e: any): void; }
        OnShow: { (e: any): void; }
        OnClose: { (e: any): void; }
        OnDestroy: { (e: any): void; }

        Init(opt: IViewParams) {
            this._opt = opt;

            if (!this._opt)
                return;

            if (this._opt.id)
                this._el = document.getElementById(this._opt.id);
            else
                this._el = this._opt.el;

            if (this.OnInit)
                this.OnInit({ self: this });
        }

        Show() {
            if (this._el)
                this._el.style.display = 'block';
            if (this.OnShow)
                this.OnShow({ self: this });
        }

        Close() {
            if (this._el)
                this._el.style.display = 'none';
            if (this.OnClose)
                this.OnClose({ self: this });
        }

        Destroy() {
            if (this.OnClose)
                this.OnClose({ self: this });

            this._el = undefined;
            this._opt= undefined;
        }
    }

}