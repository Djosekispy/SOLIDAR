import api from "@/request/utils/api";
import { IPostRequest } from "./postRequestInterface";
import request from "@/RMO/mapper";


class PostRequests implements IPostRequest {
  async loginRequest(email: string, password: string): Promise<any> {
      return  request.route.login.post({ email, password });
}

}
export default PostRequests;
