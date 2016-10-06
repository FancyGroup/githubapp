"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('../../npm/index.js');
var public_1 = require("../../api/wx/public.js");
var Splash = (function (_super) {
    __extends(Splash, _super);
    function Splash() {
        _super.call(this);
        this.data = {
            splashAnimation: {}
        };
        new index_1.Github({ username: 'xxxx', password: 'xxxxx' }).getUser().listStarredRepos()
            .then(function (_a) {
            var reposJson = _a.data;
            debugger;
            console.log("clayreimann has " + reposJson.length + " repos!");
        });
    }
    Splash.prototype.onShow = function () {
        var _this = this;
        setTimeout(function () {
            var animation = wx.createAnimation({
                duration: 10000,
                timingFunction: 'ease-out',
            });
            animation.scale(1.5, 1.5).step();
            _this.setData({
                splashAnimation: animation.export()
            });
        }, 500);
    };
    return Splash;
}(public_1.PageConfigs));
Page(new Splash());
