import {Response, Request} from "express"
import {selectByType} from "../data/selectByType"


export const getUserByType = async(req:Request, res:Response):Promise<void> => {

    try {

        const type = req.params.type as string;

        if(!type) {
            throw new Error("Você deve inserir um valor para 'type'")
        }

        const searchUser = await selectByType(type)

        if(!searchUser.length) {
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send(searchUser)
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }

}