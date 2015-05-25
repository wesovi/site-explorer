
var menu = require('node-menu');
var winston = require('winston');
var urlInfoTask = require('./app/tasks/urlInfoTask');

menu.addItem('Extract info from url',
  function(urlPath){
    urlInfoTask(urlPath);
  },
  null,
  [{'name': 'urlPath', 'type': 'string'}]
);

menu.addDelimiter('*', 40);

menu.start();
