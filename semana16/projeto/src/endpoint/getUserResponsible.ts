import {Request, Response} from "express"
import {selectUserResponsible} from "../data/selectUserResponsible"


export const getUserResponsible = async (req:Request, res:Response):Promise<void> => {

    try {

        const userResponsible = await selectUserResponsible(Number(req.params.id))

        if(!userResponsible) {
            res.status(400).send({message: "Invalid params"})
            return
        }

        if(userResponsible.length === 0) {
            res.status(404).send({message: "Task not found"})
            return
        }

        res.status(200).send({users: userResponsible})
        
        
    } catch (error) {
        res.status(404).send(error.message)
    }

}