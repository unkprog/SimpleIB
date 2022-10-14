export namespace util.binder {

    export function BindEvent(el: Element, eventName: string, event: Function, self: object): any {
        let result = event.bind(self);
        el.addEventListener(eventName, result);
        return result;
    }

    export function UnbindEvent(el: Element, eventName: string, event: any): any {
        el.removeEventListener(eventName, event);
        return undefined;
    }
}