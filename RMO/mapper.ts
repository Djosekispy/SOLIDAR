import api from "@/request/utils/api";
import RequestMapper from "./RequestMapping";

const config = {
  login: { endpoint: "/login" },
};

const request = new RequestMapper(config, api);

export default request;
