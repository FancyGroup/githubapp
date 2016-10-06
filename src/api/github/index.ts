import {GitHub} from "../../npm/index";

export function login(username:string, password:string) {
    return new GitHub({
        username,
        password
    })
}