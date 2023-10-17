

export default class FileUtility {
    static getExtension(fileName){
        var ret = "";
        if (!fileName) {
            return ret;
        }
        var fileTypes = fileName.split(".");
        var len = fileTypes.length;
        if (len === 0) {
            return ret;
        }
        ret = fileTypes[len - 1];
        return ret.toLowerCase();
    }
}