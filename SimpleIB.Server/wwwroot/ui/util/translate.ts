export namespace util.tr {
    let trd = {};

    // The locale our app first shows
    const defaultLocale: string = 'ru';
    // The active locale
    let locale: string = defaultLocale;


    export async function setLocale(newLocale) {
        if (newLocale === locale) return;
        locale = newLocale;
        translatePage();
    }

    function translatePage() {
        document.querySelectorAll('[data-tr]').forEach(translateElement);
    }

    export function translateView(el: HTMLElement) {
        el.querySelectorAll('[data-tr]').forEach(translateElement);
    }

    function translateElement(el: HTMLElement) {
        const key = el.getAttribute('data-tr');
        el.innerText = T(key);
    }

    export function T(key): string {
        const tr = trd[key];
        return tr[locale];
    }

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
}

