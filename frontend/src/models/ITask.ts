import { userInterface } from "./IUser";
import { GroupInterface } from "./IGroup";

export interface TaskInterface {
    length: any;
    id: number,
    name: string,
    userId: userInterface,
    groupId: GroupInterface,
    state : boolean,
}