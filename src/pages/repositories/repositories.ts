import animation = wx.animation;
import {Github} from '../../npm/index';
import {PageConfigs} from "../../api/wx/public";

interface IData {
  motto: string;
  userInfo: Object;
}


class Repositories extends PageConfigs<IData> implements IPageConfigs<IData> {
  public data: IData;

  public constructor() {
    super();
    this.data = {
      motto: 'Hello World',
      userInfo: {}
    }
  }

  public bindViewTap() {
  }

  public onLoad() {
    console.log('repos onload');

    this.setData({} as IData);
    // const github = new Github({username: '', password: ''});
    // github.getUser().listRepos()
    //   .then(function ({data: reposJson}) {
    //     for(let repo of reposJson) {
    //       console.log(repo.name);
    //     }
    //     // debugger;
    //   });
  }
}

Page(new Repositories());
