import {PageConfigs} from "../../api/wx/public";

interface IData {
    motto:string;
    userInfo:Object;
}

class Index extends PageConfigs<IData> implements IPageConfigs<IData> {
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
        var self = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        self.setData({
                            userInfo: res.userInfo
                        } as IData)
                    }
                })
            }
        });
    }
}

Page(new Index());