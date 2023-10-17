export default class HtmlUtility {
    static setTitle(value){
        document.title = value;
    }

    static setDescription(value){
        var metaDiscre = document.head.children;
        var metaLength = metaDiscre.length;
        for(var i = 0;i < metaLength;i++){
            var proper = metaDiscre[i].getAttribute('name');
            if(proper === 'description'){
                var dis = metaDiscre[i];
                dis.setAttribute('content',value);
            }
        }
    }

    static setOgDescription(value){
        var metaDiscre = document.head.children;
        var metaLength = metaDiscre.length;
        for(var i = 0;i < metaLength;i++){
            var proper = metaDiscre[i].getAttribute('name');
            if(proper === 'og:description'){
                var dis = metaDiscre[i];
                dis.setAttribute('content',value);
            }
        }
    }

    static setKeyword(value){
        var metaDiscre = document.head.children;
        var metaLength = metaDiscre.length;
        for(var i = 0;i < metaLength;i++){
            var proper = metaDiscre[i].getAttribute('name');
            if(proper === 'keywords'){
                var dis = metaDiscre[i];
                dis.setAttribute('content',value);
            }
        }
    }


    static pushState(options) {
        options = options || {};
        options.state = options.state || null;
        options.title = options.title || null;
        options.url = options.url || null;
        if (history && history.pushState) {
            history.pushState(
                    options.state, options.title, options.url);
            return true;
        }
        return false;
    }

    static replaceState(options) {
        options = options || {};
        options.state = options.state || null;
        options.title = options.title || null;
        options.url = options.url || null;
        if (history && history.replaceState) {
            history.replaceState(
                    options.state, options.title, options.url);
            return true;
        }
        return false;
    }

}