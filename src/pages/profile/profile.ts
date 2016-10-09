import {auth} from '../../api/github/auth';
import {getProfile} from '../../api/github/index';
import {ProfileVM} from './viewmodels/ProfileVM';
import PageConfigs from '../../utils/PageConfigs';

interface IData {
    profileVM: ProfileVM
}

class Profile extends PageConfigs<IData> {

    public constructor() {
        super();
    }

    public async onLoad() {
        const user = await getProfile(auth);
        this.setData({
            profileVM: new ProfileVM(user)
        });
    }
}

Page(new Profile());