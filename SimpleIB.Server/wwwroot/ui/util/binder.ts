export namespace util.binder {

    export function BindEvent(el: Element, eventName: string, event: Function, self: object): any {
        let result = event.bind(self);
        el['bind_' + eventName] = result;
        el.addEventListener(eventName, result);
        return result;
    }

    export function UnbindEvent(el: Element, eventName: string): any {
        el.removeEventListener(eventName, el['bind_' + eventName]);
        delete el['bind_' + eventName];
        return undefined;
    }
}