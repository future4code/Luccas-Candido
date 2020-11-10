import {removeUser} from "../data/removeUser"
import {Request, Response} from "express"
import { AuthenticatorData, getData } from "../services/authenticator"



export const deleteUser = async(req:Request, res:Response):Promise<void> => {


    try {

        const token:string = req.headers.authorization as string

        const tokenData:AuthenticatorData = getData(token)
        console.log(tokenData.role)

        if(tokenData.role !== "ADMIN") {
            res.statusCode = 401
            throw new Error("Não autorizado.")
        }

        await removeUser(req.params.id)

        res.status(200).send({message: "Usuário deletado"})

        
    } catch (error) {

        let {message} = error
        
        if(message === "jwt must be provided") {
            res.statusCode = 401;
            message = "Não autorizado"
        }

        res.send(message)
    }

}
