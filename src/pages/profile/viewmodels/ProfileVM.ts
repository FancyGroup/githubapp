import {IGHUser} from '../../../api/github/models';
/**
 * Created by allen on 2016/10/9.
 */

export class ProfileVM {
    public avatarUrl:string;

    public constructor(user: IGHUser) {
        this.avatarUrl = user.avatar_url;
    }
}