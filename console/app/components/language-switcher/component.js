import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isRtl } from '../../helpers/is-rtl';

export default class LanguageSwitcherComponent extends Component {
    @service intl;
    @service rtl;
    @service currentUser;

    @tracked currentLocale;

    constructor() {
        super(...arguments);
        this.currentLocale = this.intl.locale;
    }

    get isRtlLanguage() {
        return isRtl([this.currentLocale]);
    }

    @action
    async changeLanguage(event) {
        const selectedLocale = event.target.value;
        this.currentLocale = selectedLocale;

        // Set the locale in the intl service
        this.intl.setLocale([selectedLocale]);

        // Update RTL settings
        this.rtl.setLocale(selectedLocale);

        // Save user preference
        if (this.currentUser && this.currentUser.user) {
            try {
                await this.currentUser.setOption('locale', selectedLocale);
            } catch (error) {
                console.warn('Could not save locale preference:', error);
            }
        }
    }
}
