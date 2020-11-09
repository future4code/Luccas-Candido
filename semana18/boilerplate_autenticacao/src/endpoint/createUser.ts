import {Request, Response} from "express"
import {insertUser} from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"

export const createUser = async(req:Request, res:Response):Promise<void> => {


    try {

        const {email, password, name } = req.body

        let message = "Usuário criado com sucesso."

        if(email.indexOf("@") === -1 || !email) {
            res.statusCode = 406
            message = "Campo email e password são obrigatórios."
            throw new Error(message)
            
        }

        if(!password || password.length < 6) {
            res.statusCode = 406
            message = "Senha inválida"
            throw new Error(message)
        }

        if(!name) {
            res.statusCode = 406;
            message = "Insira um valor válido para o campo name"
            throw new Error(message)
            
        }


        const id = generateId()

        await insertUser(id, name, email, password)



        const token:string = generateToken({id})

        res.status(200).send({
            token,
        })
        
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
        
    }


}
