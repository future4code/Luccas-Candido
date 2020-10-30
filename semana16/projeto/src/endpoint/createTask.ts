import {Response,Request} from "express"
import {createTaskF} from "../data/createTaskF"

export const createTask = async(req:Request, res:Response):Promise<void> => {

    try {

        const {title, description, limit_date, creator_user_id} = req.body
        const result = await createTaskF(
            title,
            description,
            limit_date,
            creator_user_id
        )

        if(title === "" || description === "" || limit_date === "") {
            res.status(400).send({message: "Insert a right data!"})

        } else {
        res.status(200).send({result})

        }

        
    } catch (error) {
        res.status(400).send(error.message)
}
}