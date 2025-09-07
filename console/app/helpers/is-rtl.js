import { helper } from '@ember/component/helper';

export function isRtl([locale]) {
    const rtlLanguages = ['fa', 'fa-ir', 'ar', 'ar-ae', 'he', 'he-il', 'ur', 'ur-pk'];
    return rtlLanguages.includes(locale) || rtlLanguages.some((lang) => locale.startsWith(lang));
}

export default helper(isRtl);
