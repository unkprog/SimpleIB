import * as b from "../util/binder.js";

export namespace ui.ctrl {

    export class View implements IView {

        constructor() {
           //super();
        }

        _el  :HTMLElement;
        _opt: IViewParams;

        get Id(): string {
            return this._opt.id;
        }

        get Element(): HTMLElement {
            return this._el;
        }

        OnInit: { (e: any): void; }
        OnShow: { (e: any): void; }
        OnClose: { (e: any): void; }
        OnDestroy: { (e: any): void; }

        Init(opt: IViewParams) {
            this._opt = opt;

            if (!this._opt || (!this._opt.el && !this._opt.id))
                return;

            if (this._opt.el)
                this._el = this._opt.el;
            else if (this._opt.id)
                this._el = document.getElementById(this._opt.id);
               
            this.DoInitEvents();
            if (this.OnInit)
                this.OnInit({ self: this });

        }

        Destroy() {
            this.DoDestroyEvents();
            if (this._el && this._el.style.display == 'block')
                this.Close();
            this._el = undefined;
            this._opt = undefined;
        }


        BindEvent(el: Element, eventName: string, event: Function): any {
            return b.util.binder.BindEvent(el, eventName, event, this);
        }

        UnbindEvent(el: Element, eventName: string): any {
            return b.util.binder.UnbindEvent(el, eventName);
        }

        DoInitEvents() {
           
        }

        DoDestroyEvents() {

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
            window.app.CloseView(this);
        }


    }

}