import IUserRepository from "../repository/interface/userRepository";
import IAuthService from "./interface/IAuth";

class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository) {}

  signIn = async (email: string, password: string) => {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedPassword = password.trim();
      const user =  await this.userRepository.login(sanitizedEmail, sanitizedPassword);
      return user;
    } catch (error) {
       throw (error as any).message
    }
  };
}

export default AuthService;
