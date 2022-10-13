export class AppViews {
    private _constructorviews: any;
    private _views: any;
    private _cid: number;

    constructor() {
        this._constructorviews = {};
        this._views = {};
        this._cid = 0;
    }

    Register(view: string, funcConstructor: () => IView) {
        if (!this._constructorviews[view])
            this._constructorviews[view] = funcConstructor;
    }

    Find(view: string): Function {
        return this._constructorviews[view];
    }

    Add(aView: IView) {
        this._views[aView.Id] = aView;
    }

    Del(aView: IView) {
        delete this._views[aView.Id];
    }

    get IncCid(): number {
        this._cid++;
        return this._cid;
    }

}