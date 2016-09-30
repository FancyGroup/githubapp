/**
 * Created by allen on 2016/9/29 0029.
 */

export interface IApp {
    globals: IGlobals;
}

export interface IGlobals {
    hasLogin: boolean
}

export default class AppConfigs implements IAppConfigs,IApp {
    public globals: IGlobals;

    public constructor() {
        this.globals = {
            hasLogin: false,
        }
    }

    public onLaunch() {
        console.log('WX Launch');
    }

    public onShow() {
        console.log('App Show')
    }

    public onHide() {
        console.log('App Hide')
    }
}