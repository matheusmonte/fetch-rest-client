"use strict"
var getMethod = require('./Methods/get');
var postMethod = require('./Methods/post');
var putMethod = require('./Methods/put');
var deleteMethod = require('./Methods/delete');

module.exports = function getURL(url, headers = {'Content-Type': 'application/json'}){
  return getMethod(url, headers);
}

module.exports = function postURL(url, body, headers = {'Content-Type': 'application/json'}){
  return postMethod(url, body, headers);
}

module.exports = function putURL(url, body, headers = {'Content-Type': 'application/json'}){
  return putMethod(url, body, headers);
}

module.exports = function deleteURL(url, body, headers = {'Content-Type': 'application/json'}){
  return deleteMethod(url, body, headers);
}