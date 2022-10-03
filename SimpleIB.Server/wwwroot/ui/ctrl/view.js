export var ui;
(function (ui) {
    var ctrl;
    (function (ctrl) {
        class View {
            constructor() {
                //super();
            }
            get Element() {
                return this._el;
            }
            InitOptions(opt) {
                this._opt = opt;
                if (!this._opt)
                    return;
                if (this._opt.id)
                    this._el = document.getElementById(this._opt.id);
                else
                    this._el = this._opt.el;
            }
        }
        ctrl.View = View;
    })(ctrl = ui.ctrl || (ui.ctrl = {}));
})(ui || (ui = {}));
//# sourceMappingURL=view.js.map