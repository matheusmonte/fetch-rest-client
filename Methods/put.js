"use strict"

module.exports = function putMethod(url, body, headers) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: new Headers(headers)
    })
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        } else {
          return reject(new Error('Error in put ' + url));
        }

      })
      .catch((error) => {
        return reject(new Error(error.message));
      });
  });
}