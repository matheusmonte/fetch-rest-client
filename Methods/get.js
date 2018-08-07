"use strict"

module.exports = function getMethod(url, headers) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: new Headers(headers)
    }).then((response) => {
      return resolve(response.json());
    }).catch(error => {
      return reject(new Error(error.message));
    });
  });
};