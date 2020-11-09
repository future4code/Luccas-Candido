import {connection} from "../index"


export const selectAllUsers = async():Promise<any> => {
    const result = await connection
    .select("*")
    .from("TodoListUser")

    return result

}