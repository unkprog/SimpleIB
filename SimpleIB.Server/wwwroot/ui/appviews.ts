export class AppViews {
    private _views: any;

    constructor() {
        this._views = {};
    }

    Register(view: string, funcConstructor: () => IView) {
        if (!this._views[view])
            this._views[view] = funcConstructor;
    }

    Find(view: string): IView {
        let result: IView;
        if (this._views[view])
            result = this._views[view]();
        return result;
    }
}