"use strict"
var getMethod = require('./Methods/get');
var postMethod = require('./Methods/post');
var putMethod = require('./Methods/put');
var deleteMethod = require('./Methods/delete');

class FetchClient{
  get(url, headers){
    return getMethod(url, headers = {'Content-Type': 'application/json'});
  }

  post(url, body, headers = {'Content-Type': 'application/json'}){
    return postMethod(url, body, headers);
  }

  put(url, body, headers = {'Content-Type': 'application/json'}){
    return putMethod(url, body, headers);
  }

  delete(url, body, headers = {'Content-Type': 'application/json'}){
    return deleteMethod(url, body, headers);
  }
}
export default FetchClient