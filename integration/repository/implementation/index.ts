import { postRequest } from "@/request/method/POST";
import UserImplementation from "./userImplementation";


const userImplementation = new UserImplementation(postRequest);

export { userImplementation }