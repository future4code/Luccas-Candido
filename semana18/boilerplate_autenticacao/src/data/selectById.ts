import {connection} from ".."
import { User } from "./selectByEmail"


export const selectById = async(id:string):Promise<User> => {

        const result = await connection.raw(`
        SELECT * FROM user_class_50 as user
        WHERE user.id = "${id}";
        `)

    

    return result[0][0]


}
