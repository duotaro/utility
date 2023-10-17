export default class ArrayUnility {
  static isEmpty(value):boolean {
    return !Object.keys(value).length;
  }

  /**
   * ランダムシャッフルします
   * @param array 
   * @returns 
   */
  static shuffle(array:[]){
      if(!array || this.isEmpty(array)){
        return array;
      }
      let newArray = [];
      while (array.length > 0) {
        const n:number = array.length;
        const k:number = Math.floor(Math.random() * n);
      
        newArray.push(array[k]);
        array.splice(k, 1);
      }
      return newArray
  }

  /**
   * arrayから重複を削除します
   * @param array 
   * @returns 
   */
  static unique(array:[]){
    if(!array || this.isEmpty(array)){
      return array;
    }
    const array2 = [...new Set(array)];
    return array2
  }

  static sliceList(array:[], startIndex, endIndex) {
    if(!array || this.isEmpty(array)){
      return array;
    }
    // startIndexのデフォルトは0
    if(!startIndex || !Number.isInteger(endIndex)){
      startIndex = 0
    }
    // endIndexは指定されていて数値だったら使う
    if(endIndex && Number.isInteger(endIndex)){
      return array.slice(startIndex, endIndex);
    }
    return array.slice(startIndex);
  }
}