import {connection} from ".."
import { User } from "../types/user"

export const selectByEmail = async(email:string):Promise<User> => {

    try {

        const result = await connection.raw(`
        SELECT * FROM cookenu_user as user
        WHERE user.email = "${email}"
        `)

        return {

            id: result[0][0].id,
            name: result[0][0].name,
            email: result[0][0].email,
            password: result[0][0].password,
            role: result[0][0].role

        }

    }


    catch(error) {
        
        throw new Error(error.sqlMessage || error.message)
    }

}