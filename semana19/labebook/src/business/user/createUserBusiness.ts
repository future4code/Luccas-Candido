import { insertUser } from "../../data/user/insertUser"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"

export const createUserBusiness = async(input:any):Promise<any> => {

    try {
        if (!input.name || !input.email || !input.password) {
           throw new Error('"name", "email" and "password" must be provided')
        }

        if(input.email.indexOf("@") === -1) {
            throw new Error("Invalid E-mail")
        }

        if(input.password.length < 6) {
            throw new Error("Password must be have 6 character at least")
        }
  
        const id: string = generateId()
  
        const cypherPassword = await hash(input.password);
  
        const token: string = generateToken({ id })

        await insertUser(
            id,
            input.name,
            input.email,
            cypherPassword
        )

        return token

  
     } catch (error) {
        throw new Error(error.message || error.sqlMessage)
     }

}