

export default interface IUserRepository {
   login(email:string,password:string):Promise<any>
}