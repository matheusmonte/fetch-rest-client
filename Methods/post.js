"use strict"

module.exports = function postMethod(url, body) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
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