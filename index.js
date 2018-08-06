"use strict"
import {getMethod, postMethod, putMethod, deleteMethod} from './Methods';

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