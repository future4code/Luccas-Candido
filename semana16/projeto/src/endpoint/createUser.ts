import {Response, Request} from "express"
import {createUserF} from "../data/createUserF"

export const createUser = async (req:Request, res:Response):Promise<void> => {
    try {

        if(!req.body.name || !req.body.nickname || !req.body.email) {
            res.status(400).send({message: "Insira os dados corretos."})
            return
        }

        await createUserF(
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        

        res.status(200).send({message: "User created sucessfully!"})
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}