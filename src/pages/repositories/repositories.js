"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var public_1 = require("../../api/wx/public.js");
var Repositories = (function (_super) {
    __extends(Repositories, _super);
    function Repositories() {
        _super.call(this);
        this.data = {
            motto: 'Hello World',
            userInfo: {}
        };
    }
    Repositories.prototype.bindViewTap = function () {
    };
    Repositories.prototype.onLoad = function () {
        console.log('repos onload');
        this.setData({});
        // const github = new Github({username: '', password: ''});
        // github.getUser().listRepos()
        //   .then(function ({data: reposJson}) {
        //     for(let repo of reposJson) {
        //       console.log(repo.name);
        //     }
        //     // debugger;
        //   });
    };
    return Repositories;
}(public_1.PageConfigs));
Page(new Repositories());
