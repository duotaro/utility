

import StringUtility from "./StringUtility";

export default class NumberUtility {
    static format(value, defaultValue = "0") {
        if (StringUtility.isEmpty(value)) {
            return defaultValue;
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static ceil(value, a = 0){
        var position = Math.pow(10, a);
        var result = value;
        result = result * position;
        result = Math.ceil(result)
        result = result / position;
        return result;
    }

    static convertByteToKiloByte(value){
        return value / 1024;
    }

    static convertByteToMegaByte(value){
        return value / 1024 / 1024;
    }

    static convertSiteFormat(value){
        return NumberUtility.ceil(NumberUtility.convertByteToMegaByte(value), 1) ;
    }
}