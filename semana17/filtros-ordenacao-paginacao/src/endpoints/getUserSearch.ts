import {Response, Request} from "express"
import { selectTypeOrName } from "../data/selectTypeOrName"
import { selectUserSearch } from "../data/selectUserSearch"

export const getUserSearch = async(req:Request, res:Response):Promise<void> => {

    try {

        const name = req.query.name as string
        const type = req.query.type as string

        if(!name) {
            res.statusCode = 404;
            throw new Error("Você deve inserir um valor pra 'name'")
        }


        const filter = await selectTypeOrName(name, type)

        if(!filter.length) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(filter)
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }

}