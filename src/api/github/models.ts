/**
 * Created by allen on 2016/10/6.
 */


//TODO: 对于不确定意思的字段暂时先用any表示, 明确后加入意思

export interface IGHUser {
    avatar_url:string; //头像 如: https://avatars.githubusercontent.com/u/2658298?v=3
    bio:string; //个人描述
    blog:any; //博客
    collaborators:number; //合作伙伴
    company:any; //公司
    created_at:string; //创建时间: 如 "2012-10-26T15:58:46Z"
    disk_usage:number; //磁盘使用: 如 153783 TODO: 意思单位不明, 估计字节
    email:string;//邮箱
    events_url:string; //TODO:意思不确定 "https://api.github.com/users/jf3096/events{/privacy}"
    followers:number; //粉丝数
    followers_url:string; //粉丝页面接口文件
    following:number; //关注人数; (关注别人)
    following_url:string //关注人地址; 如: "https://api.github.com/users/jf3096/following{/other_user}"
    gists_url:string; //gist地址
    gravatar_id:string; //头像ID
    hireable:any; //TODO: 意思单位不明
    html_url:string; //github地址, 如:"https://github.com/jf3096"
    id:number; //如:2658298
    location:any; //地址
    login:string; //账号, 如"jf3096"
    name:string; //名, 如"PsAiL"
    organizations_url:string; //企业地址, 如: "https://api.github.com/users/jf3096/orgs"
    owned_private_repos:number; //私有库个数
    private_gists:number; //私有gist个数
    public_gists:number; //公有gist个数
    public_repos:number; //公有仓库个数
    received_events_url:string;//接收事件地址, 如:"https://api.github.com/users/jf3096/received_events"
    repos_url:string; //仓库地址, 如"https://api.github.com/users/jf3096/repos"
    site_admin:boolean; //TODO:意思尚不明确
    starred_url:string;//给star的地址,如"https://api.github.com/users/jf3096/starred{/owner}{/repo}"
    subscriptions_url:string;//订阅地址,如"https://api.github.com/users/jf3096/subscriptions"
    total_private_repos:number;//一共私有库的个数
    type:string; //类型, 目前已知返回了一个"User"
    updated_at:string; //最后更新时间, 如"2016-10-06T14:32:57Z"
    url:string; //地址,如"https://api.github.com/users/jf3096"
    plan:{
        collaborators:number; //合作人数,如0
        name:string;//当前的账户类型,如"free"
        private_repos:number;//私有库个数
        space:number; //空间大小, 如976562499 TODO: 单位不确定, 估计是字节
    }
}