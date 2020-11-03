import {Response, Request} from "express"
import { selectUserSearch } from "../data/selectUserSearch"

export const getUserSearch = async(req:Request, res:Response):Promise<void> => {

    try {

        const name = req.query.name as string

        if(!name) {
            throw new Error("Você deve inserir um valor pra 'name'")
        }


        const filter = await selectUserSearch(name)

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