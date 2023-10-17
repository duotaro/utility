type LocaleItem = {
    localeCode:string;
    localeName:string;
}

export default class LocaleUtility {
    static getLabel(value) {
        var item = this.getLocaleList.filter(p => p["localeCode"] === value)[0];
        if(!item){
            return "";
        }

        return item["localeName"];
    }

    static get getLocaleList(){
        var list:LocaleItem[] = [];

        list.push({"localeCode": "ja", "localeName": "日本語"});
        list.push({"localeCode": "zh_CN", "localeName": "中文（简体）"});
        list.push({"localeCode": "zh_TW", "localeName": "中文（繁體）"});
        list.push({"localeCode": "ko", "localeName": "한국어"});
        list.push({"localeCode": "en", "localeName": "English"});
        list.push({"localeCode": "ar", "localeName": "العربية"});
        list.push({"localeCode": "de", "localeName": "Deutsch"});
        list.push({"localeCode": "es_US", "localeName": "Español (América Latina)"});
        list.push({"localeCode": "es", "localeName": "Español"});
        list.push({"localeCode": "fr", "localeName": "Français"});
        list.push({"localeCode": "hi", "localeName": "हिन्दी"});
        list.push({"localeCode": "in", "localeName": "Bahasa Indonesia"});
        list.push({"localeCode": "it", "localeName": "Italiano"});
        list.push({"localeCode": "ms", "localeName": "Bahasa Melayu"});
        list.push({"localeCode": "pl", "localeName": "Polski"});
        list.push({"localeCode": "pt", "localeName": "Português"});
        list.push({"localeCode": "pt_BR", "localeName": "Português (Brasil)"});
        list.push({"localeCode": "ru", "localeName": "Русский"});
        list.push({"localeCode": "th", "localeName": "ภาษาไทย"});
        list.push({"localeCode": "vi", "localeName": "Tiếng Việt"});
        list.push({"localeCode": "hu", "localeName": "magyar"});
        list.push({"localeCode": "tr", "localeName": "Türkçe"});
        list.push({"localeCode": "cs", "localeName": "čeština"});
        list.push({"localeCode": "sk", "localeName": "slovenčina"});
        list.push({"localeCode": "ro", "localeName": "română"});

        return list;
    }
}