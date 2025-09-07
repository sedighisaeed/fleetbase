import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RtlService extends Service {
    @service intl;

    @tracked isRtl = false;

    constructor() {
        super(...arguments);
        this.checkRtlLanguage();
    }

    @action
    checkRtlLanguage() {
        const currentLocale = this.intl.locale;
        // Check if the current locale is a RTL language (Persian, Arabic, Hebrew, etc.)
        this.isRtl = this.isRtlLanguage(currentLocale);
        this.applyRtlClass();
    }

    isRtlLanguage(locale) {
        const rtlLanguages = ['fa', 'fa-ir', 'ar', 'ar-ae', 'he', 'he-il', 'ur', 'ur-pk'];
        return rtlLanguages.includes(locale) || rtlLanguages.some((lang) => locale.startsWith(lang));
    }

    applyRtlClass() {
        const rootElement = document.documentElement;
        if (this.isRtl) {
            rootElement.setAttribute('dir', 'rtl');
            rootElement.classList.add('rtl');
            rootElement.classList.remove('ltr');
        } else {
            rootElement.setAttribute('dir', 'ltr');
            rootElement.classList.add('ltr');
            rootElement.classList.remove('rtl');
        }
    }

    @action
    setLocale(locale) {
        this.intl.setLocale(locale);
        this.isRtl = this.isRtlLanguage(locale);
        this.applyRtlClass();
    }
}
