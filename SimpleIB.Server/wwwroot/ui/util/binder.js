export var util;
(function (util) {
    var binder;
    (function (binder) {
        function BindEvent(el, eventName, event, self) {
            let result = event.bind(self);
            el.addEventListener(eventName, result);
            return result;
        }
        binder.BindEvent = BindEvent;
        function UnbindEvent(el, eventName, event) {
            el.removeEventListener(eventName, event);
            return undefined;
        }
        binder.UnbindEvent = UnbindEvent;
    })(binder = util.binder || (util.binder = {}));
})(util || (util = {}));
//# sourceMappingURL=binder.js.map