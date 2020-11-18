import { connection } from "../index"
import { User } from "../types/user"

export const insertUser = async(user:User):Promise<any> => {

    const result = await connection
    .insert({
        id:user.id,
        name:user.name, 
        email:user.email,
        password:user.password,
        role: user.role
    })
    .into("cookenu_user")

    return result

}

