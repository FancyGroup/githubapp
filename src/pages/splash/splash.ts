import animation = wx.animation;

interface IData {
    splashAnimation:animation
}

class Splash implements IPageConfigs<IData> {
    public data:IData;

    public constructor() {
        this.data = {
            splashAnimation: wx.createAnimation()
        };
        console.log(require('github-api'));
    }

    public onShow() {
        setTimeout(()=> {
            console.log(123);
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