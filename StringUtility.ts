

export default class StringUtility {
    static isEmpty(value):boolean {
        return (value === null || value === "" || value === undefined);
    }

    static convertNullToEmpty(value){
        if(value === null || value === undefined) return "";
        return value;
    }

    static convertToData(value){
        return this.convertNullToEmpty(value);
    }

    static addCommas(value){
        value += '';
        let x = value.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    static charactersChange(val){
        var result = val.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){
            return String.fromCharCode(s.charCodeAt(0)-0xFEE0)}
        );
        return result;
    }

    static checkRegular(value, exp){
        if (value.match(exp)) {
            return true;
        }
        return false;
    }

    static formatErrorMessage(value, splitString){
        return value.split(splitString)[1];
    }

    static convertNewLine(value){
        return value.replace(/\r?\n/g,"");
    }

    static toBoolean(value){
        return value.toLowerCase() === "true";
    }

}