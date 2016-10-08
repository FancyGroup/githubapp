"use strict";
const index_1 = require('../../npm/index.js');
function login(username, password) {
    return new index_1.Github({
        username,
        password
    });
}

function getProfile(auth) {
    return new Promise((resolve, reject) => {
        auth.getProfile((err, user, request) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(user);
        });
    });
}

module.exports = {login:login,getProfile:getProfile};