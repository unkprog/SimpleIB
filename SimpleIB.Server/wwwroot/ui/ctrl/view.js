export var ui;
(function (ui) {
    var ctrl;
    (function (ctrl) {
        class View {
            constructor(opt) {
                //super();
                this._opt = opt;
                this.InitOptions();
            }
            get Element() {
                return this._el;
            }
            InitOptions() {
                if (!this._opt)
                    return;
                if (this._opt.id)
                    this._el = document.getElementById(this._opt.id);
            }
        }
        ctrl.View = View;
    })(ctrl = ui.ctrl || (ui.ctrl = {}));
})(ui || (ui = {}));
//# sourceMappingURL=view.js.map