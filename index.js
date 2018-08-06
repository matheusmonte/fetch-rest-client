"use strict"
var getMethod = require('./Methods/get');
var postMethod = require('./Methods/post');
var putMethod = require('./Methods/put');
var deleteMethod = require('./Methods/delete');

module.exports = function getURL(url, headers = {}){
  return getMethod(url);
}

module.exports = function postURL(url, body, headers={}){
  return postMethod(url, body);
}

module.exports = function putURL(url, body, headers={}){
  return putMethod(url, body);
}

module.exports = function deleteURL(url, body, headers={}){
  return deleteMethod(url, body);
}