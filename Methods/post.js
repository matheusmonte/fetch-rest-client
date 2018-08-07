"use strict"

module.exports = function postMethod(url, body, headers) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers(headers)
    })
      .then((response) => {
        if (response.ok) {
          return resolve(response.json());
        } else {
          return reject(new Error('Error in post' + url));
        }
      })
      .catch((error) => {
        return reject(Error(error.message));
      });
  });
}