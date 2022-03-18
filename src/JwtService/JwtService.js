import axios from "axios";

const jwtService = () => {
  let inst = axios.create();
  inst.defaults.baseURL = "https://sigviewauth.sigmoid.io/api/v1";
  inst.interceptors.request.use(function (config) {
    let token =
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token");
    inst.defaults.headers.common["x-auth-token"] = token;
    config.headers.common["x-auth-token"] = token;
    return config;
  });

  return inst;
};
export default jwtService();
