export class AppViews {
    constructor() {
        this._constructorviews = {};
        this._views = {};
        this._cid = 0;
    }
    Register(view, funcConstructor) {
        if (!this._constructorviews[view])
            this._constructorviews[view] = funcConstructor;
    }
    Find(view) {
        return this._constructorviews[view];
    }
    Add(aView) {
        this._views[aView.Id] = aView;
    }
    Del(aView) {
        delete this._views[aView.Id];
    }
    get IncCid() {
        this._cid++;
        return this._cid;
    }
}
//# sourceMappingURL=appviews.js.map