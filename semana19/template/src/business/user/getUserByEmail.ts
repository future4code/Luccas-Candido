import selectUserByEmail from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { compare } from "../../services/hashManager"


export const getUserByEmail = async(input:any) => {

    const user = await selectUserByEmail(input.email)

    if(!input.email || !input.password || input.email.indexOf("@") === -1)  {
        throw new Error("E-mail ou senha inválidos.")
    }

    if(!user) {
        throw new Error("Usuário não existe")
    }

    const hashCompare = await compare(input.password, user.password)

    if(!hashCompare) {
        throw new Error("Senha incorreta")
    }

    const token:string = generateToken({id:user.id, role: user.role})

    return token

}