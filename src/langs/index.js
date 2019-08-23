import en from './en';
import vn from './vn';

const LN = { en, vn }

export let Lang = {
    selectedLang: 'en',
    config: function(lang) {
        return LN[lang ? lang : this.selectedLang]
    }
}