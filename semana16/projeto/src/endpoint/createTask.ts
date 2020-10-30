import {Response,Request} from "express"
import {createTaskF} from "../data/createTaskF"
import moment from "moment"

export const createTask = async(req:Request, res:Response):Promise<void> => {

    try {
        const {title, description, limit_date, creator_user_id} = req.body


        if(!title || !description || !limit_date) {
            res.status(400).send({message: "Insert a right data!"})
            return
        }

        const dateDiff: number = moment(limit_date, 'DD/MM/YYYY').unix() - moment().unix()

        if(dateDiff <= 0) {
            res.status(400).send({message: "Data limite deve ser uma data futura"})
        }

        await createTaskF(
            title,
            description,
            limit_date,
            creator_user_id
        )

        res.status(200).send({message: "Task created!"})

        
    } catch (error) {
        res.status(400).send(error.message)
}
}