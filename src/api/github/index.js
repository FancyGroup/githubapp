"use strict";
var index_1 = require('../../npm/index.js');
function login(username, password) {
    return new index_1.Github({
        username: username,
        password: password
    });
}

function getProfile(auth) {
    return new Promise(function (resolve, reject) {
        auth.getProfile(function (err, user, request) {
            if (err) {
                reject(err);
                return;
            }
            resolve(user);
        });
    });
}

module.exports = {login:login,getProfile:getProfile};