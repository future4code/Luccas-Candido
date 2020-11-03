import {Request, Response} from "express"
import { createActor } from "../data/createActor"

export const putActor = async(req:Request, res:Response):Promise<void> => {

    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
        )

        res.status(200).send({message: "Actor created sucessfully!"})
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

