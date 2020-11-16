import { selectAllUser } from "../../data/user/selectAllUsers"
import { AuthenticationData, getTokenData } from "../../services/authenticator"


export const getAllUsers = async(token:string) => {

    const authentication:AuthenticationData = getTokenData(token) 

    if(!authentication) {
        throw new Error("Não autorizado.")
    }

    const users = await selectAllUser()

    if(!users.length) {
        throw new Error("Usuário não encontrado")
    }

    return users

}