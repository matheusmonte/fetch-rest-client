"use strict"

module.exports = function getMethod(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => {
      return resolve(response.json());
    }).catch(error => {
      return reject(new Error(error.message));
    });
  });
};