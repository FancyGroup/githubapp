import animation = wx.animation;
import {Github} from '../../npm/index';
import {PageConfigs} from "../../api/wx/public";
interface IData {
    splashAnimation:any
}

class Splash extends PageConfigs<IData> implements IPageConfigs<IData> {
    public data:IData;

    public constructor() {
        super();
        this.data = {
            splashAnimation: {}
        } as IData;
        new Github({username: 'xxxx', password: 'xxxxx'}).getUser().listStarredRepos()
            .then(function ({data: reposJson}) {
                debugger;
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
            this.setData({
                splashAnimation: animation.export() as animation
            } as IData);
        }, 500);
    }
}

Page(new Splash());