
class AppViews {
    _views: any;
    constructor() {

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

export const appViews: AppViews = new AppViews();
