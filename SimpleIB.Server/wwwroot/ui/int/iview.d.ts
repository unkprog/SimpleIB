interface IViewParams {
    id?: string;
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
