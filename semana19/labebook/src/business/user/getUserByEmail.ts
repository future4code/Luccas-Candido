import { compare } from "bcryptjs"
import { selectByEmail } from "../../data/user/selectByEmail"
import { generateToken } from "../../services/authenticator"


export const getUserByEmail = async(input:any) => {

    const user = await selectByEmail(input.email)

    if(!input.email || !input.password || input.email.indexOf("@") === -1) {
        throw new Error("Invalid password or e-mail")
    }

    if(!user) {
        throw new Error("Usuário não existe")
    }

    const isPasswordCorrect = await compare(input.password, user.password)

    if(!isPasswordCorrect) {
        throw new Error("Wrong password or e-mail")
    }

    const token:string = generateToken({id:user.id})

    return token

}