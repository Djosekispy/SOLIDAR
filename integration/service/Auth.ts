import { isAxiosError } from "axios";
import IUserRepository from "../repository/interface/userRepository";
import IAuthService from "./interface/IAuth";

class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository) {}

  signIn = async (email: string, password: string) => {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedPassword = password.trim();
      const { data } =  await this.userRepository.login(sanitizedEmail, sanitizedPassword);
      return data;
    } catch (error) {
      throw isAxiosError(error) ? error.response?.data : error;
       
    }
  };
}

export default AuthService;
