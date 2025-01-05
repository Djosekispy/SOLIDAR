

interface IAuthService {
    signIn(email: string, password: string): Promise<any>;
}


export default  IAuthService;