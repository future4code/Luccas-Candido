import {Request, Response} from "express"
import PostBusiness from "../business/PostBusiness"

import { PostInput } from "../model/Post"

class PostController {

    public createPost = async(req:Request, res:Response):Promise<void> => {


        try {
        
            const token:string = req.headers.authorization as string
            
            const input:PostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }

            const post = await PostBusiness.createPost(input, token)

            res.status(201).send({message: "Post criado com sucesso", post})

    } catch(error) {
        throw new Error(error.message || error.sqlMessage)
    }


    }

}

export default new PostController()

