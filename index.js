"use strict"

module.exports = function get(url, callbacks, headers = {}){
  return new Promise((resolve, reject) => {
    if(url === undefined){
      reject('Definy a URL to execute get method');
      return callback('Not Valid URL'); 
    }else{
      //will performe get method and send data as callback return
    }
  });
}