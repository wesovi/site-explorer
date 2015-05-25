var url = require('url');

var UrlVO = funciton(){
  var self = this;
  var path = '';
  var hostname = '';
}


UrlVO.prototype.hostnameFromPath(path){
  URLVO.path = path;
  URLVO.hostname = url(path).hostname();
}
