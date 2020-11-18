import {Request, Response} from "express"
import { selectById } from "../data/selectById"
import { AuthenticatorData, getData } from "../services/authenticator"



export const getProfile = async(req:Request, res:Response):Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const authentication:AuthenticatorData = getData(token)

        if(authentication.role !== 'ADMIN') {
            res.statusCode = 401;
            throw new Error("Não autorizado")
        }

        const user = await selectById(authentication.id)


        res.status(200).send({
            id: user.id,
            email: user.email,
            role:authentication.role
        })


        
    } catch (error) {
        let { message } = error

        if(message === "jwt must be provided") {
            message = "Não autorizado"
            res.statusCode = 404;
        }

        res.send({message})
    }

}

