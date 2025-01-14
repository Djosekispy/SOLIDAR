import Euser from "@/integration/model/entity/Euser";

interface IPostRequest {
  loginRequest(email: string, password: string): Promise<any> 
}

export {IPostRequest }