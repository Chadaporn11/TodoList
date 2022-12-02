import { userInterface } from "./IUser"
import { TaskInterface } from "./ITask"
export interface GroupInterface {
    id: number,
    name: string,
    userid : number,
    user : userInterface
    tasks : TaskInterface

}