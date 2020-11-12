import {Response, Request} from "express"
import {selectById} from "../data/selectById"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const getProfileById = async(req:Request, res:Response):Promise<any> => {

    try {

        const token:string = req.headers.authorization as string

        const authentication:AuthenticatorData = await getData(token)

        if(!authentication) {
            res.statusCode = 401
            throw new Error("Não autorizado.")
        }

        const user = await selectById(req.params.id)

        if(!user) {
            res.statusCode = 400
            throw new Error("Usuário não encontrado")
        } 

        res.status(200).send({
            id:user.id,
            name:user.name,
            email: user.email
        })


        
    } catch (error) {

        let {message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não autorizado."
        }

        res.send(message)
        
    }

}