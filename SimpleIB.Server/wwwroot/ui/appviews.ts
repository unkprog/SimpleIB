export class AppViews {
    private _constructorviews: any;
    private _views: Array<IView>;

    constructor() {
        this._constructorviews = {};
    }

    Register(view: string, funcConstructor: () => IView) {
        if (!this._constructorviews[view])
            this._constructorviews[view] = funcConstructor;
    }

    Find(view: string): IView {
        let result: IView;
        if (this._constructorviews[view]) {
            result = this._constructorviews[view]();
        }
        return result;
    }

    Set(aView: IView) {
        this._views[aView.Id] = aView;
        this._views.push(aView);
    }

    get Count():number {
        return this._views.length;
    }

}