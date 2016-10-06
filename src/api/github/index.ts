import {Github} from '../../npm/index';

export function login(username: string, password: string) {
    return new Github({
        username,
        password
    })
}