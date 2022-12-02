import { userInterface } from "./IUser";
import { GroupInterface } from "./IGroup";

export interface TaskInterface {
    id: number,
    name: string,
    userId: userInterface,
    groupId: GroupInterface,
    state : boolean,
}