import config from "./config";

const pub = "blogs";

export default class CMDB extends config {
  static getBlogs(code) {
    const path = `/${pub}`;
    return this.comGet(path);
  }
  static getBlogById(id) {
    const path = `/${pub}/${id}`;
    return this.comGet(path);
  }
  static getBlogByPage(data) {
    const path = `/${pub}/getByPage`;
    return this.comPost(path, data);
  }
  static addBlog(data) {
    const path = `/${pub}`;
    return this.comPost(path, data);
  }
  static modBlog(id,data){
    const path = `/${pub}/${id}`
    return this.comPatch(path,data);
  }
  static upLoad(data){
    const path = `/blog/upload`;
    return this.comPost(path,data);
  }
  static getWatch(id){
    const path = `/watch/${id}`;
    return this.comGet(path);
  }
  static setWatch(id){
    const path = `/watch/${id}`;
    return this.comPost(path)
  }
  static getComments(id){
    const path = `/comment/${id}`;
    return this.comGet(path);
  }
  static setComments(id,data){
    const path = `/comment/${id}`;
    return this.comPost(path,data)
  }
  static setGood(id,data){
    const path = `/good/${id}`;
    return this.comPost(path,data);
  }
}
