
var winston = require('winston');
var urlUtils = require('./../utils/urlUtils');
var sys = require('sys')
var exec = require('child_process').exec;

module.exports = function(urlPath){
  console.log(urlPath);
  console.log(urlUtils.hostname(urlPath));
  exec("whois "+urlUtils.hostname(urlPath),whois);
}
function whois(error, stdout, stderr) { sys.puts(stdout) }
