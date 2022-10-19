interface IOpenViewParams {
    viewName: string;
    toElement?: HTMLElement;

    onInit?: { (e: any): void; };
    onShow?: { (e: any): void; };
    onClose?: { (e: any): void; };
    onDestroy?: { (e: any): void; };
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

    OnInit: { (e: any): void; };
    OnShow: { (e: any): void; };
    OnClose: { (e: any): void; };
    OnDestroy: { (e: any): void; };

    get Id(): string;
    get Element(): HTMLElement;
}

interface IViewModal extends IView {
    set Header(aValue: string);
    get Content(): HTMLElement;
}
