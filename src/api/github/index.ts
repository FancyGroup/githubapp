import {Github} from '../../npm/index';
import {IGHUser} from './models';

interface IGithub {
    new (username: string, password: string);
    new (token: string);
    getUser: ()=>IAuth;
}

interface IAuth {
    getProfile: (cb: Function)=>void;
}

export function login(username: string, password: string): IGithub {
    return new Github({
        username,
        password
    })
}

export function getProfile(auth: IAuth): Promise<IGHUser> {
    return new Promise((resolve, reject)=> {
        auth.getProfile((err, user: IGHUser, request)=> {
            if (err) {
                reject(err);
                return;
            }
            resolve(user);
        })
    })
}