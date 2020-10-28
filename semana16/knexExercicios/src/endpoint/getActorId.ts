import {Request, Response} from "express"
import { getActorById } from "../data/getActorById"

export const getActorId = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch(error) {
        res.status(400).send({message: error.message})
    }
}