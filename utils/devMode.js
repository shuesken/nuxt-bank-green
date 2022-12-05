
import { i18n } from '~~/lang'

if (process.env.NODE_ENV !== 'production') {
    const changeLanguage = (lang) => {
        if (lang === 'en') {
            i18n.global.locale = 'en'
        } else {
            i18n.global.locale = 'key'
            i18n.global.setLocaleMessage('key', {})
        }
    }

    const cycleLanguage = () => {
        switch (i18n.global.locale) {
            case 'en': changeLanguage('key'); break;
            case 'key': changeLanguage('en'); break;
        }
    }

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.shiftKey && e.code === "KeyK") {
            cycleLanguage()
        }
    })
}
