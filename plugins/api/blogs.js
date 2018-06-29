import config from "./config";

const pub = "blogs";

export default class CMDB extends config {
  static getBlogs(code) {
    const path = `/${pub}`;
    return this.comGet(path);
  }
  static addBlog(data) {
    const path = `/${pub}`;
    return this.comPost(path, data);
  }
}
