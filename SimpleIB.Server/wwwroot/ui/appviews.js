export class AppViews {
    constructor() {
        this._constructorviews = {};
    }
    Register(view, funcConstructor) {
        if (!this._constructorviews[view])
            this._constructorviews[view] = funcConstructor;
    }
    Find(view) {
        let result;
        if (this._constructorviews[view]) {
            result = this._constructorviews[view]();
        }
        return result;
    }
    Set(aView) {
        this._views[aView.Id] = aView;
        this._views.push(aView);
    }
    get Count() {
        return this._views.length;
    }
}
//# sourceMappingURL=appviews.js.map