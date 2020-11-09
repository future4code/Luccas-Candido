import {connection} from "../index"


export const searchUser = async(name:string):Promise<any> => {

    const result = await connection
    .select("*")
    .from("TodoListUser")
    .where("name", "LIKE", `%${name}%`);

    return result

}