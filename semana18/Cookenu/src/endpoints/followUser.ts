import {Request, Response} from "express"
import {updateFollower} from "../data/updateFollower"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const followUser = async(req:Request, res:Response):Promise<void> => {

    try {

        const {userToFollow} = req.body

        const token:string = req.headers.authorization as string
        
        const authentication:AuthenticatorData = getData(token)
        const userId = authentication.id 

        let message = "Usuário seguido"

        if(!userToFollow) {
            res.statusCode = 404;
            message = "Usuário não encontrado."
            throw new Error(message)
        }

        if(!authentication) {
            res.statusCode = 401
            message = "Não autorizado"
            throw new Error(message)
        }

        await updateFollower(userId, userToFollow)

        res.status(200).send(message)
        
    } catch (error) {
        let{message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não autorizado"

        } else if(message === "jwt expired") {
            res.statusCode = 400
            message = "Sessão expirada"
            
        } else if (message.includes('Duplicate')) {
            res.statusCode = 400
            message = "Já segue esse usuário"
        }
 
        res.send(message)
        
    }

}

