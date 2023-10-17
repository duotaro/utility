

export class JsonUtility {
    static toJson(value:any){
        return encodeURIComponent(JSON.stringify(value));
    }

    static toNaitiveJson(value:any){
        return JSON.stringify(value);
    }

    static parse(value:any){
        if(!value){
            return null;
        }
        return JSON.parse(value);
    }
}
