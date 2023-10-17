

import FileUtility from "./FileUtility";
export default class ValidateUtility {
    //ファイルの拡張子チェック
    static invalidUploadExtension(fileName){
        var ext = FileUtility.getExtension(fileName);
        return (ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "psd" && ext != "mdp");
    }

    static validImageExtension(fileName){
        var ext = FileUtility.getExtension(fileName);
        return (ext === "jpg" || ext === "jpeg" || ext === "png");
    }

    //ファイルサイズチェック
    static invalidFileSize(file, limit){
        if(limit === void(0)){
            limit = 30
        }
        return (file.size > limit * 1024 * 1024);
    }
}
