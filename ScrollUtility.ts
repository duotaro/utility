

/**
 * 監視用オプション
 */
interface IntersectionObserverOption {
    /** 監視対象となるelement 未指定の場合は最上位のビューポートが使用されます。デフォルト値:null */
    root:any;

    /** 交差状態を計算するときに root の バウンディングボックス に適用されるオフセットの矩形。デフォルト値:0px 0px 0px 0px*/
    rootMargin:string;

    /** 交差領域と監視対象のバウンディングボックス領域との比の閾値を昇順に並べたリスト。デフォルト値:0 */
    thresholds:Number;
}

/**
 * デフォルトコールバック関数
 * 意味はない
 * @param entries 
 * @returns 
 */
const initialCallback = (entries) => {
    // intersectionRatio が 0 の場合、対象がビューの外にあるので、
    // 何かをする必要はありません。
    if (entries[0].intersectionRatio <= 0) return;
}


export default class ScrollUtility {
    
    /**
     * Intersection Observer Options作成
     * @param options 
     * @returns 
     */
    static createOption(options:any):IntersectionObserverOption {
        let res:IntersectionObserverOption = {
            root: null,
            rootMargin:"0px 0px 0px 0px",
            thresholds:1
        }
        if(!options || !options.root){
            return res;
        }

        res.root = options.root
        res.rootMargin = options.rootMargin ? options.rootMargin : '0px'
        res.thresholds = options.thresholds ? options.thresholds : 0
        return res;
    }

    /**
     * Intersection Observer作成
     * @param callback 
     * @param options 
     * @returns 
     */
    static createIntersectionObserver(callback, options:IntersectionObserverOption):IntersectionObserver{
        if(!callback){
            callback = initialCallback
        }
        return new IntersectionObserver(callback, options);
    }

    /**
     * 要素の監視をスタート
     * @param observe 
     * @param target 
     */
    static observe(observe:IntersectionObserver, target){
        if(!target){
            console.log('target is not found')
            return
        }
        if(!observe){
            observe = this.createIntersectionObserver(initialCallback, this.createOption(null));
        }
        observe.observe(target);
    }

    /**
     * 対象の監視を停止
     * @param observe 
     */
    static disconnect(observe:IntersectionObserver){
        if(!observe){
            return;
        }
        observe.disconnect();
    }
}