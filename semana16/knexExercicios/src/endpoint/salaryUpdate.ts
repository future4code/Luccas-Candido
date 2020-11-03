import {Request, Response} from "express"
import { updateSalary } from "../data/updateSalary"

export const salaryUpdate = async (req: Request, res:Response):Promise<void> => {
    try {
        await updateSalary(
            req.body.id,
            req.body.salary
        )

        res.status(200).send({message: "Salary updated sucessfully!"})
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}