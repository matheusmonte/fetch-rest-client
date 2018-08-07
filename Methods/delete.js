"use strict"

module.exports = function deleteMethod(url, body, headers) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: new Headers(headers)
    }).then((response) => {
      return resolve(response.json());
    }).catch(error => {
      return reject(new Error(error.message));
    });
  });
};