import api from "@/request/utils/api";
import { IPostRequest, ILoginResponse } from "./postRequestInterface";
import { isAxiosError } from "axios";

class PostRequests implements IPostRequest {
  async login(email: string, password: string): Promise<ILoginResponse> {
    try {
      const { data } = await api.post<ILoginResponse>('/login', { email, password });
      return {
        sucess: true,
        token: data.token,
        seller: data.seller,
        message: "Login feito com sucesso"
      };
    } catch (error) {
      const message = isAxiosError(error) && error.response ? error.response.data : error;
      return {
        sucess: false,
        message
      };
    }
  }
}

export default PostRequests;
