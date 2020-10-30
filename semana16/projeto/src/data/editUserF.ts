import {connection} from "../index"

export const editUserF = async(id:number, name:string, nickname:string):Promise<any> => {
    await connection("TodoListUser")
    .update({
        name:name,
        nickname:nickname
    })
    .where("id", id)
}