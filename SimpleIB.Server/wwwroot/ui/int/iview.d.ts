interface IOpenViewParams {
    viewName: string;
    toElement: HTMLElement;
}

interface IViewParams {
    id?: string;
    el?: HTMLElement;
    url?: string;
}

interface IViewModalParams {
    header?: string;
    el?: HTMLElement;
    url?: string;
}

interface IView {
    Init(opt: IViewParams)
    Show();
    Close();
    Destroy();

    Id: string;
}
