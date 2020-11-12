import { compare } from "bcryptjs"
import {Request, Response} from "express"
import {selectByEmail } from "../data/selectByEmail"
import { generateToken } from "../services/authenticator"
import { User } from "../types/user"


export const login = async(req:Request, res:Response):Promise<void> => {

    try {

        const {email, password} = req.body

        let message = "Usuário logado"

        if(!email || !password || email.indexOf("@") === -1) {
            res.statusCode = 406;
            message = "Email e senha são obrigatórios"
            throw new Error(message)
        }

        const user:User = await selectByEmail(email)

        if(!user) {
            res.statusCode = 404
            message = "Usuário ou senha incorretos"
            throw new Error(message)
        }

        const isPasswordCorrect = await compare(password, user.password)

        if(!isPasswordCorrect) {
            res.statusCode = 401
            message = "Usuário não encontrado ou senha incorreta."
            throw new Error(message)
        }

        const token:string = await generateToken({
            id: user.id
        })

        res.status(200).send({message,
        token})
        
    } catch (error) {

        let {message} = error

        if(message === "Cannot read property 'id' of undefined") {
            res.statusCode = 401
            message = "Usuário não cadastrado"
        }



        res.send(message)

        
    }

}