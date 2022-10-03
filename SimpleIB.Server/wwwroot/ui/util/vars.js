class AppViews {
    constructor() {
    }
    Register(view, funcConstructor) {
        if (!this._views[view])
            this._views[view] = funcConstructor;
    }
    Find(view) {
        let result;
        if (this._views[view])
            result = this._views[view]();
        return result;
    }
}
export const appViews = new AppViews();
//# sourceMappingURL=vars.js.map