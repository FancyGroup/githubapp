import animation = wx.animation;
import {Github} from '../../npm/index';
interface IData {
    splashAnimation:any
}

class Splash implements IPageConfigs<IData> {
    public data:IData;

    public constructor() {
        this.data = {
            splashAnimation: {}
        } as IData;
        new Github({username: 'jf3096', password: 'asdf1234'}).getUser().listStarredRepos()
            .then(function ({data: reposJson}) {
                debugger;
                console.log(`clayreimann has ${reposJson.length} repos!`);
            });
    }

    public onShow() {
        const self = this;
        setTimeout(()=> {
            const animation = wx.createAnimation({
                duration: 10000,
                timingFunction: 'ease-out',
            });
            animation.scale(1.5, 1.5).step();
            self.setData({
                splashAnimation: animation.export() as animation
            });
        }, 500);
    }
}

Page(new Splash());