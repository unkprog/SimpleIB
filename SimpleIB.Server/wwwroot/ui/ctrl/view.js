import * as b from "../util/binder.js";
export var ui;
(function (ui) {
    var ctrl;
    (function (ctrl) {
        class View {
            constructor() {
                //super();
            }
            get Id() {
                return this._opt.id;
            }
            get Element() {
                return this._el;
            }
            Init(opt) {
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
            BindEvent(el, eventName, event) {
                return b.util.binder.BindEvent(el, eventName, event, this);
            }
            UnbindEvent(el, eventName, event) {
                return b.util.binder.UnbindEvent(el, eventName, event);
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
        ctrl.View = View;
    })(ctrl = ui.ctrl || (ui.ctrl = {}));
})(ui || (ui = {}));
//# sourceMappingURL=view.js.map