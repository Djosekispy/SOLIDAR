import { userImplementation } from "../repository/implementation";
import AuthService from "./Auth";


const authService = new AuthService(userImplementation) 

export { authService }