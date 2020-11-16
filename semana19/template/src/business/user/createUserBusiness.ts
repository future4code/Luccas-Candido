import {generateId} from "../../services/idGenerator"
import {hash} from "../../services/hashManager"
import{insertUser} from "../../data/user/insertUser"
import {generateToken} from "../../services/authenticator"


export const createUserBusiness = 
async(input:any) => {


    try {

        if(!input.name ||
            !input.email ||
            !input.password) {
                throw new Error("Preencha os campos 'name', 'password' e 'email'.")
            }

        if(input.email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }

        if(input.password.length < 6) {
            throw new Error("Password precisa ser pelo menos 6 caracteres")
        }

        
        const id:string = generateId()

        const cypherPassword = await hash(input.password)

        await insertUser(
            id,
            input.name,
            input.email,
            cypherPassword,
            input.role
        )

        const token:string  = generateToken({id, role:input.role})

        return token

    } catch(error) {
        throw new Error(error.message)
    }

}