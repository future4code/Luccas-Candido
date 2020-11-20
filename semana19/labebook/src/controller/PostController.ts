import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";

import { Post, PostInput } from "../model/Post";

class PostController {
  public createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;

      const input: PostInput = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
      };

      const post = await PostBusiness.createPost(input, token);

      res.status(201).send({ message: "Post criado com sucesso", post });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  };

  public getPostById = async (req: Request, res: Response): Promise<void> => {

    try {
      const token: string = req.headers.authorization as string;

      const input = {
        id: req.params.id,
      };

      const post = await PostBusiness.getPostById(input, token);

      res.status(200).send({ posts: post });

    } catch (error) {

        let {message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não"
        }

        res.status(400).send({message: error.message || error.sqlMessage})
    }
  };

  public getFeed = async(req:Request, res:Response):Promise<void> => {

    try {

      const token:string = req.headers.authorization as string

      const feed = await PostBusiness.getFeed(token)

      res.status(200).send({feed: feed})
      
    } catch (error) {

      let {message} = error

      if(message === "jwt must be provided") {
          res.statusCode = 401
          message = "Não"
      }

      res.status(400).send({message: error.message || error.sqlMessage})

      
    }


  }


}

export default new PostController();
