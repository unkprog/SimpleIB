export var util;
(function (util) {
    var binder;
    (function (binder) {
        function BindEvent(el, eventName, event, self) {
            let result = event.bind(self);
            el['bind_' + eventName] = result;
            el.addEventListener(eventName, result);
            return result;
        }
        binder.BindEvent = BindEvent;
        function UnbindEvent(el, eventName) {
            el.removeEventListener(eventName, el['bind_' + eventName]);
            delete el['bind_' + eventName];
            return undefined;
        }
        binder.UnbindEvent = UnbindEvent;
    })(binder = util.binder || (util.binder = {}));
})(util || (util = {}));
//# sourceMappingURL=binder.js.map