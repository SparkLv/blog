import axios from "axios";
import Vue from "vue";

let ip = "http://10.0.52.22:2420";

axios.interceptors.request.use(config => {
  // config.headers.Token = "abc";
  return config;
});

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response);
      return false;
    }
  },
  error => {
    Vue.prototype.$message({
      message: JSON.parse(JSON.stringify(error)),
      type: "error"
    });
    console.log(JSON.stringify(error));
    return false;
  }
);

export default class Config extends axios {
  static comGet(path) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.get(url).then(res => {
        resolve(res);
      });
    });
  }
  static comPost(path, data) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.post(url, data).then(res => {
        resolve(res);
      });
    });
  }
  static comPatch(path, data) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.patch(url, data).then(res => {
        resolve(res);
      });
    });
  }
  static comPut(path, data) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.put(url, data).then(res => {
        resolve(res);
      });
    });
  }
  static comDel(path) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.delete(url).then(res => {
        resolve(res);
      });
    });
  }
}
