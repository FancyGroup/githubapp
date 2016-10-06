"use strict";
var index_1 = require('../../npm/index.js');
function login(username, password) {
    return new index_1.Github({
        username: username,
        password: password
    });
}

module.exports = {login:login};