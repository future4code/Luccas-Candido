import {Response, Request} from "express"
import { selectSearch } from "../data/selectSearch"
import { inputData } from "../types/inputData"

export const getUserSearch = async(req:Request, res:Response):Promise<void> => {

    try {

        const data:inputData = {
            name: req.query.name as string,
            type: req.query.type as string,
            page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
        }


        if(!data.name) {
            res.statusCode = 404;
            throw new Error("Você deve inserir um valor pra 'name'")
        }


        const filter = await selectSearch(data)

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