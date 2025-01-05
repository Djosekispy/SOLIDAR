import User from "@/integration/model/user";
import {IPostRequest} from "@/request/method/POST/postRequestInterface";
import IUserRepository from "@/integration/repository/interface/userRepository";
import Euser from "@/integration/model/entity/Euser";

class UserImplementation implements IUserRepository {
  constructor(private postMethod: IPostRequest) {}

  login = async (email: string, password: string): Promise<Euser> => {
        const response = await this.postMethod.login(email, password);
        if(response.sucess){
            return new User(response?.seller as Euser);
        }
        throw response.message;
  };
}

export default UserImplementation;
