

import {JsonUtility} from "./JsonUtility";

export const STORAGE_KEY = {
	
}


export class StorageManager {
	static storeData(key:string, data:any){
		if(!this.validSessionStorage()){
			return;
		}

		try {
			sessionStorage.setItem(key, JsonUtility.toNaitiveJson(data));
		} catch (err) {
			console.error(err);
		}
	}

	static getStoreData(key:string) {
		if(!this.validSessionStorage()){
			return;
		}

		try {
			return JsonUtility.parse(sessionStorage.getItem(key));
		} catch (err) {
			console.error(err);
		}
	}

	static validSessionStorage(){
		if(!('sessionStorage' in window)) {
			return false;
		}

		if(sessionStorage === null) {
			return false;
		}

		return true;
	}

}
