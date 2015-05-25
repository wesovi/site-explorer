var url = require('url');

var hostname = function (urlPath){
    return url.parse(urlPath).hostname;

}

module.exports.hostname = hostname;
