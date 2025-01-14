import api from "@/request/utils/api";
import { IPostRequest } from "./postRequestInterface";


class PostRequests implements IPostRequest {
  async loginRequest(email: string, password: string): Promise<any> {
      return  api.post('/login', { email, password });
}

}
export default PostRequests;
