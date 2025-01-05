import Euser from "@/integration/model/entity/Euser";

interface ILoginResponse {
    token?: string;
    seller?:  Euser
    sucess : boolean
    message? : any
  }

interface IPostRequest {
   login(email: string, password: string): Promise<ILoginResponse> 
}

export {ILoginResponse, IPostRequest }