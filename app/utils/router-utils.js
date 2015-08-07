var routerUtils = {
    routerSeparator : function (url, moduleName) {
        var splitUrl = url.split('/'),
            index = (url && url[0] === '/') ? 1 : 0;

        console.log('routerSeparator:: ', url, splitUrl, index, moduleName);
        if (splitUrl && splitUrl.length > 0 && splitUrl[index] && splitUrl[index] === moduleName) {
            splitUrl.splice(0, 1);
            if (index === 1) splitUrl.splice(1, 1);
        }

        return splitUrl.join('/');
    }
};


module.exports = routerUtils;