import {Request, Response} from "express"
import { selectTaskByUserId } from "../data/selectTaskByUserId"

export const getTaskByUserId = async(req:Request, res:Response):Promise<void> => {

    try {

    const taskById = await selectTaskByUserId(Number(req.query.creatorUserId))

    if(!taskById) {
        res.status(400).send({message: "Invalid query params"})
        return
    }

    if(taskById.length === 0) {
        res.status(404).send({message: "User ID not found"})
        return
    }

    res.status(200).send({tasks: taskById})


    } catch (error) {
        res.status(400).send(error.message)
    }

}