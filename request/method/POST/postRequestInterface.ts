
interface IPostRequest {
  loginRequest(email: string, password: string): Promise<any> 
}

export {IPostRequest }