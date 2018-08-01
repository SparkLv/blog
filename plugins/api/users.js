import config from "./config";

export default class CMDB extends config {
  static login(data) {
    const path = `/login`;
    return this.comPost(path, data);
  }
  static validToken() {
    const path = `/validToken`;
    return this.comGet(path);
  }
}
