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
  static upLoad(data){
    const path = `/blog/upload`;
    return this.comPost(path,data);
  }
}
