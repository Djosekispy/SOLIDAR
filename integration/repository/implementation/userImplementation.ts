import {IPostRequest} from "@/request/method/POST/postRequestInterface";
import IUserRepository from "@/integration/repository/interface/userRepository";

class UserImplementation implements IUserRepository {
  constructor(private postMethod: IPostRequest) {}

  login = async (email: string, password: string): Promise<any> => {
      return  this.postMethod.loginRequest(email, password);
}

}
export default UserImplementation;
