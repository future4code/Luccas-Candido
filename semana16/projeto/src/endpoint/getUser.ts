import {Response, Request} from "express"
import {getUserF} from "../data/getUserF"

export const getUser = async(req:Request, res:Response):Promise<void> => {
    try {

        const user = await getUserF(Number(req.params.id))
        if(!user) {
            res.status(404).send({message: "User not found!"})
            return
        }

        res.status(200).send(user)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}