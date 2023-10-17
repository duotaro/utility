export default class DateUtility {
    static convertLongToDate(value:number):Date{
        if(!value){
            return new Date();
        }
        return new Date(value);
    }

    static convertDateToString(localDate:Date, format:string) {
        if(!localDate){
            return "";
        }

        //
        var utc = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
        //jst 9
        var target = new Date(utc + (3600000 * 9));

        var year = target.getFullYear();
        var month = ('0' + (target.getMonth() + 1)).slice(-2);
        var date = ('0' + target.getDate()).slice(-2);
        var hour = ('0' + target.getHours()).slice(-2);
        var minute = ('0' + target.getMinutes()).slice(-2);
        var second = ('0' + target.getSeconds()).slice(-2);
        var milliSecond = ('00' + target.getMilliseconds()).slice(-3);

        //yyyy/MM/dd HH:mm:ss SSS
        var result = format;
        result = result.replace(/yyyy/, year.toString());
        result = result.replace(/MM/, month);
        result = result.replace(/dd/, date);
        result = result.replace(/HH/, hour);
        result = result.replace(/mm/, minute);
        result = result.replace(/ss/, second);
        result = result.replace(/SSS/, milliSecond);
        return result;
    }

    static convertDateToStringNoZero(localDate:Date, format:string) {
        if(!localDate){
            return "";
        }

        //
        var utc = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
        //jst 9
        var target = new Date(utc + (3600000 * 9));

        var year = target.getFullYear();
        var month = String((target.getMonth() + 1))
        var date = String(target.getDate())
        var hour = String(target.getHours())
        var minute = String(target.getMinutes())
        var second = String(target.getSeconds())
        var milliSecond = String(target.getMilliseconds())

        //yyyy/MM/dd HH:mm:ss SSS
        var result = format;
        result = result.replace(/yyyy/, year.toString());
        result = result.replace(/MM/, month);
        result = result.replace(/dd/, date);
        result = result.replace(/HH/, hour);
        result = result.replace(/mm/, minute);
        result = result.replace(/ss/, second);
        result = result.replace(/SSS/, milliSecond);
        return result;
    }

    static convertLongToString(value:number, format:string){
        var date = DateUtility.convertLongToDate(value)
        return DateUtility.convertDateToString(date, format)
    }

    static convertStringToDate(value:string){
        if(!value){
            return null;
        }
        var year;
        var month;
        var date;

        if(value.length === 8){
            year = value.substr(0, 4);
            month = value.substr(4, 2);
            date = value.substr(6, 2);
        }else{
            year = value.substr(0, 4);
            month = value.substr(5, 2);
            date = value.substr(8, 2);
        }

        //jst にて保存
        var d = year + "-" + month + "-" + date + "T00:00:00+09:00";
        return new Date(d);
    }

    static formatDateString(value:string){
        if(!value){
            return "";
        }
        return value.substring(0, 4) + "/" + value.substring(4, 6) + "/" + value.substring(6, 8);
    }

    static formatNoSlash(value:string) {
        if(!value){
            return "";
        }
        return value.replace(/\u002f/g, "");
    }

    static getNow():Date{
        var localDate = new Date();
        var utc = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
        //jst 9
        return new Date(utc + (3600000 * 9));
    }

    static getYear():number{
        return Number(DateUtility.convertDateToString(DateUtility.getNow(), "yyyy"));
    }

    static getMonth():number{
        return Number(DateUtility.convertDateToString(DateUtility.getNow(), "MM"));
    }

    static convertStringToFirstDate(year:number, month:number):Date{
        return new Date(year, month - 1, 1);
    }

    static convertStringToEndDate(year:number, month:number):Date{
        return new Date(year, month, 0);
    }

    static convertDateFormat(dateTime, format){
        return DateUtility.convertDateToString(DateUtility.convertLongToDate(dateTime), format);
    }
    static convertDay(day){
        switch(day){
            case "mon":
                return 1;
            case "tue":
                return 2;
            case "wed":
                return 3;
            case "thu":
                return 4;
            case "fri":
                return 5;
            case "sat":
                return 6;
            case "sun":
                return 7;
            default:
                return "";
        }
    }

    static convertDayLabel(day){
        switch(day){
            case "mon":
                return "月";
            case "tue":
                return "火";
            case "wed":
                return "水";
            case "thu":
                return "木";
            case "fri":
                return "金";
            case "sat":
                return "土";
            case "sun":
                return "日";
            default:
                return "";
        }
    }
}
