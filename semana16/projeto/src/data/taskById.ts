import {connection} from "../index"

export const taskById = async(id:number):Promise<any> => {
    const result = connection
    .select("*")
    .from("TodoListTask")
    .where("id", id)

    return result
}