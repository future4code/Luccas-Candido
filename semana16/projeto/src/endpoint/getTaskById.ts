import {Request,Response} from "express"
import {taskById} from "../data/taskById"

export const getTaskById = async(req:Request, res:Response):Promise<void> => {


    try {

        const task = await taskById(Number(req.params.id))

        if(task.length === 0) {
            res.status(404).send({message: "Task not found!"})
        } else {
            res.status(200).send(task)
        }

    } catch (error) {
        res.status(400).send(error.message)
    }

}