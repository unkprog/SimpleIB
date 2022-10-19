var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export var util;
(function (util) {
    var tr;
    (function (tr_1) {
        let trd = {};
        // The locale our app first shows
        const defaultLocale = 'ru';
        // The active locale
        let locale = defaultLocale;
        function setLocale(newLocale) {
            return __awaiter(this, void 0, void 0, function* () {
                if (newLocale === locale)
                    return;
                locale = newLocale;
                translatePage();
            });
        }
        tr_1.setLocale = setLocale;
        function translatePage() {
            document.querySelectorAll('[data-tr]').forEach(translateElement);
        }
        function translateView(el) {
            el.querySelectorAll('[data-tr]').forEach(translateElement);
        }
        tr_1.translateView = translateView;
        function translateElement(el) {
            const key = el.getAttribute('data-tr');
            el.innerText = T(key);
        }
        function T(key) {
            const tr = trd[key];
            return tr[locale];
        }
        tr_1.T = T;
        trd = {
            '$namel': {
                'ru': 'Наименование',
                'en': "Name"
            },
            '$server': {
                'ru': 'Сервер',
                'en': "Server"
            },
            '$port': {
                'ru': 'Порт',
                'en': "Port"
            },
            '$addserver': {
                'ru': 'Добавить сервер',
                'en': "Add server"
            },
        };
    })(tr = util.tr || (util.tr = {}));
})(util || (util = {}));
//# sourceMappingURL=translate.js.map