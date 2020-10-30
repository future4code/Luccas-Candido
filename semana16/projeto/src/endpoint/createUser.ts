import {Response, Request} from "express"
import {createUserF} from "../data/createUserF"

export const createUser = async (req:Request, res:Response):Promise<void> => {
    try {

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