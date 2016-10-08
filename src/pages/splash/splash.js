"use strict";
const index_1 = require('../../npm/index.js');
const PageConfigs_1 = require('../../utils/PageConfigs.js');
class Splash extends PageConfigs_1.default {
    constructor() {
        super();
        this.data = {
            splashAnimation: {}
        };
        new index_1.Github({ username: 'jf3096', password: 'asdf369547892' }).getUser().listStarredRepos()
            .then(function ({ data: reposJson }) {
            console.log(`clayreimann has ${reposJson.length} repos!`);
        });
    }
    onShow() {
        setTimeout(() => {
            const animation = wx.createAnimation({
                duration: 10000,
                timingFunction: 'ease-out',
            });
            animation.scale(1.5, 1.5).step();
            this.setData({
                splashAnimation: animation.export()
            });
        }, 500);
    }
}
Page(new Splash());
