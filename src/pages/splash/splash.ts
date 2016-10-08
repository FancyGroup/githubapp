import animation = wx.animation;
import {Github} from '../../npm/index';
import PageConfigs from '../../utils/PageConfigs';

interface IData {
    splashAnimation: animation
}

class Splash extends PageConfigs<IData> {
    public data: IData;

    public constructor() {
        super();
        this.data = {
            splashAnimation: {} as animation
        };
        new Github({username: 'jf3096', password: 'asdf369547892'}).getUser().listStarredRepos()
            .then(function ({data: reposJson}) {
                console.log(`clayreimann has ${reposJson.length} repos!`);
            });
    }

    public onShow() {
        setTimeout(()=> {
            const animation = wx.createAnimation({
                duration: 10000,
                timingFunction: 'ease-out',
            });
            animation.scale(1.5, 1.5).step();
            (this as IPageConfigs<IData>).setData({
                splashAnimation: animation.export()
            });
        }, 500);
    }
}

Page(new Splash());