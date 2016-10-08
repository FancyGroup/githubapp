"use strict";
var index_1 = require('../../npm/index.js');
var Splash = (function () {
    function Splash() {
        this.data = {
            splashAnimation: {}
        };
        new index_1.Github({ username: 'jf3096', password: 'asdf369547892' }).getUser().listStarredRepos()
            .then(function (_a) {
            var reposJson = _a.data;
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
}());
Page(new Splash());
