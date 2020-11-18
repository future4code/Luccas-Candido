import {Request, Response} from "express"
import {selectByEmail } from "../data/selectByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
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
            res.statusCode = 404;
            message = "Usuário não encontrado ou senha incorreta."
            throw new Error(message)
        }

        const isPasswordCorret = await compare(password, user.password)

        if(!isPasswordCorret) {
            res.statusCode = 404;
            message = "Usuário não encontrado ou senha incorreta."
            throw new Error(message)

        }


        const token:string = generateToken({
            id: user.id,
            role: user.role
        })


        res.send({
            message,
            token
        })
        
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

}