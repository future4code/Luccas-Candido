import {Request, Response} from "express"
import {deleteFollower} from "../data/deleteFollower"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const unfollow = async(req:Request, res:Response):Promise<void> => {

    try {

        const {userToUnfollow} = req.body

        const token:string = req.headers.authorization as string

        const authentication:AuthenticatorData = getData(token)
        const userId = authentication.id

        let message = "Unfollow com sucesso"

        if(!authentication) {
            res.statusCode = 401
            message = "Não autorizado"
            throw new Error(message)
        }

        if(!userToUnfollow) {
            res.statusCode = 404
            message = "Usuário não encontrado"
            throw new Error(message)
        }

        await deleteFollower(userId, userToUnfollow)

        res.status(200).send(message)

        
    } catch (error) {

        let {message} = error

        res.send(message)
    }

}