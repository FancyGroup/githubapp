import {login} from './index';
import account from './account';
const {username, password} = account;
export const auth = login(username, password).getUser();