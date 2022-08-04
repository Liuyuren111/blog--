import axios from "axios";
import qs from "qs";
import { message } from "@/utils/message";
import { ElLoading } from "element-plus";
import { ref } from "vue";

// import { userStore } from "../store/user";

const request = (url, method = "get", data = {}, config = {}) => {
  // 环境的切换
  if (process.env.NODE_ENV === "development") {
    // 开发环境
    axios.defaults.baseURL = "http://127.0.0.1:7001";
  } else {
    // 生产环境
    axios.defaults.baseURL = "http://gangcai.demo.gatherh.com";
  }
  return axiosRequest(url, method, data, config);
};

function axiosRequest(url, method, data, config) {
  if (method.toLocaleLowerCase() === "post") {
    data = qs.stringify(data, { indices: false });
    // console.log("axios请求参数=========", qs.parse(data));
  }

  let axiosConfig = {
    url: url,
    method: method.toLocaleLowerCase(),
    data: data,
    timeout: 300000,
  };

  if (config instanceof Object) {
    for (let key in config) {
      axiosConfig[key] = config[key];
    }
  }
  return axios(axiosConfig).then((res) => res.data);
}

const loading = ref(null);
// 添加请求拦截器
axios.interceptors.request.use(
  (res) => {
    loading.value = ElLoading.service({
      lock: true,
      text: "Loading",
    });
    // post请求时 参数放在body中。
    res.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded; charset=UTF-8";
    // const store = userStore();
    // if (store.user.token) {
    //     res.headers.Authorization = `Bearer ${store.user.token}`;
    // res.headers.Authorization = `Bearer ${store.userListMenu.token}`
    // }
    return res;
  },
  (error) => {
    loading.value.close()
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  (res) => {
    loading.value.close();
    return message(res.data.msg, "error");
  },
  (error) => {
    loading.value.close();
    return Promise.reject(error);
  }
);
export default request;
