import { connection } from "../connection";
import { USER_ROLES } from "./insertUser"

export type User = {
   id: string,
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export default async function selectUserByEmail(
   email: string
): Promise<User> {
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
      throw new Error(error.message)
   }
}