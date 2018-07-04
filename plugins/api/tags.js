import config from "./config";

const pub = "tag";

export default class CMDB extends config {
  static getTagByCode(code) {
    const path = `/${pub}/${code}`;
    return this.comGet(path);
  }
  static getAllTags() {
    const path = `/${pub}`;
    return this.comGet(path);
  }
  static addTag(data) {
    const path = `/${pub}`;
    return this.comPost(path, data);
  }
}
