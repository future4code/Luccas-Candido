import {Request, Response} from "express"
import { taskResponsible } from "../data/taskResponsible"


export const createTaskResponsible = async(req:Request, res:Response):Promise<void> => {

    try {

        const {task_id, responsible_user_id} = req.body

        if(!task_id || !responsible_user_id) {
            res.status(400).send({message: "Invalid body params"})
            return
        }

        await taskResponsible(task_id, responsible_user_id)

        res.status(200).send({message: "Task responsible created sucessfully",})
    
    
        
    } catch (error) {
        res.status(404).send(error.message)
    }

}