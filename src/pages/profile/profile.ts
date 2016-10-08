import {auth} from '../../api/github/auth';
interface IData {
}

class Profile implements IPageConfigs<IData> {

    public constructor() {
    }

    public onLoad() {
        console.log(auth);
    }
}

Page(new Profile);