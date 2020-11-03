import {Request, Response} from "express"
import { countActorByGender } from "../data/countByGender"

export const getActorGender = async(req:Request, res:Response) => {

    try {

        const gender = req.query.gender
        const result = await countActorByGender(gender as string)
        res.status(200).send({quantity: result})
        
    } catch (error) {
        res.status(400).send(error.message)  
    }
}
