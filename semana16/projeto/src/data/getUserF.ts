import {connection} from "../index"

export const getUserF = async (id:number):Promise<any> => {
    const result = await connection
    .select("*")
    .from("TodoListUser")
    .where("id", id)

    return result

}   