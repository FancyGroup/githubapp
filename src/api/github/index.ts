import {GitHub} from "../../npm/index";

export function login(username:string, password:string) {
    return new GitHub({
        username,
        password
    })
}
//
// login('jf3096', 'asdf123').getUser().listStarredRepos()
//     .then(function ({data: reposJson}) {
//         console.log(`clayreimann has ${reposJson.length} repos!`);
//     });