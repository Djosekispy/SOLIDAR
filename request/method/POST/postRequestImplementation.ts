import { IPostRequest } from "./postRequestInterface";
import request from "@/request/RME/mapper";


class PostRequests implements IPostRequest {
  async loginRequest(email: string, password: string): Promise<any> {
      return  request.route.login.post({ email, password });
}

}
export default PostRequests;
