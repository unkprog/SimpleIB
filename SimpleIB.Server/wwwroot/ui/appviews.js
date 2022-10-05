export class AppViews {
    constructor() {
        this._views = {};
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
//# sourceMappingURL=appviews.js.map