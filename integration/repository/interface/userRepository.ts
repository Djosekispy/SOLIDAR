import User from "@/integration/model/user";



export default interface IUserRepository {
   login(email:string,password:string):Promise<User>
}