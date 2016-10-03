import autoCompileWX from "./gulpAutoCompileWX";

module.exports = (content:string)=> {
    this.cacheable && this.cacheable();
    autoCompileWX();
    return content;
};