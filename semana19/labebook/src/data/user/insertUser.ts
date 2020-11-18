import {connection} from "../connection"


export const insertUser = async(
    id:string, name:string,email:string, password:string
):Promise<any> => {

    try {

        await connection.insert({
            id,
            name,
            email,
            password
        })
        .into('labook_users')

    } catch(error) {
        throw new Error(error.message || error.sqlMessage)
    }

}
