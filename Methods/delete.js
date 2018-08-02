"use strict"

module.exports = function deleteMethod(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
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