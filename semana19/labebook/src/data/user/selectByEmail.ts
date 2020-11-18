import { User } from "../../model/User"
import {connection} from "../connection"


export const selectByEmail = async(email:string):Promise<User> => {

    try {

        const result = await connection.raw(`
        SELECT * FROM labook_users as user
        WHERE user.email = "${email}"
        `)

        return {
            id: result[0][0].id,
            name: result[0][0].name,
            email: result[0][0].email,
            password: result[0][0].password

        }


    } catch(error) {
    throw new Error(error.message || error.sqlMessage)
    }

}