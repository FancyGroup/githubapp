/**
 * Created by allen on 2016/9/29 0029.
 */
var Index = (function () {
    function Index() {
        this.data = {
            motto: 'Hello Test',
            userInfo: {}
        };
    }
    Index.prototype.bindViewTap = function () {
    };
    Index.prototype.onLoad = function () {
        var that = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        that.setData({
                            userInfo: res.userInfo
                        });
                    }
                });
            }
        });
    };
    return Index;
}());
Page(new Index());
