import {Request, Response} from "express"
import { deleteActor } from "../data/deleteActor"


export const actorDelete = async(req:Request, res:Response):Promise<void> => {

    try {
        await deleteActor(
            req.params.id
        )

        res.status(200).send({message: "Actor deleted sucessfully!"})
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }

}