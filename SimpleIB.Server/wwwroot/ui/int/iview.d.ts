interface IViewOptions {
    id: string;
    el: HTMLElement;
    url: string;
}

interface IView {
    InitOptions(opt: IViewOptions)
}
