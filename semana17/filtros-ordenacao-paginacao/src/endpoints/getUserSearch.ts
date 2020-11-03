import {Response, Request} from "express"
import { selectAllUsers } from "../data/selectAllUsers"
import { selectSearch } from "../data/selectSearch"
import { inputData } from "../types/inputData"

export const getUserSearch = async(req:Request, res:Response):Promise<void> => {

    try {

        const data:inputData = {
            name: req.query.name as string,
            orderType: req.query.orderType as string || 'ASC',
            orderBy: req.query.orderBy as string || 'type',
            page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
        }


        if(data.name) {

            const validOrderByType = ['ASC', 'DESC']

            if(!validOrderByType.includes(data.orderType)) {
                throw new Error("Os valores de orderType devem ser ASC ou DESC")
            }

            const validOrderBy = ['type', 'name']

            if(!validOrderBy.includes(data.orderBy)) {
                throw new Error("Os valores de orderBy devem ser 'type' ou 'name'")
            }


            const filter = await selectSearch(data)

            if(!filter.length) {

                res.statusCode = 404;
                throw new Error("Usuário não encontrado")
            }

            res.status(200).send(filter)

        } else if(data.name === undefined) {

            const users = await selectAllUsers()
            res.status(200).send(users)
            return
            
        } else if(!data.name) {

            res.statusCode = 404;
            throw new Error("Você deve inserir um valor pra 'name'")
        }

        // if(!data.name) {
        //     
        // }

        
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }

}