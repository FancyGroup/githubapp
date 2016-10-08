import PageConfigs from '../../utils/PageConfigs';
/**
 * Created by allen on 2016/9/29 0029.
 */

interface IData {
    motto:string;
    userInfo:Object;
}

class Index  extends PageConfigs<IData> {
    public data:IData;

    public constructor() {
        super();
        this.data = {
            motto: 'Hello Test',
            userInfo: {}
        } as IData
    }

    public bindViewTap() {

    }

    public onLoad() {
        super.onLoad();
        var that:IPageConfigs<IData> = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        that.setData({
                            userInfo: res.userInfo
                        } as IData)
                    }
                })
            }
        });
    }
}

Page(new Index());