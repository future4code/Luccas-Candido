import { Post } from "../model/Post"
import {connection} from "./connection"
import UserDatabase from "./UserDatabase"


class PostDatabase {

    private tableName:string = "labook_posts"

    public createPost = async(post:Post):Promise<any> => {

        try {

        await connection(this.tableName)
        .insert({
           id:post.getId(),
           photo: post.getPhoto(),
           description: post.getDescription(),
           type: post.getType(),
           author_id: post.getAuthorId
        })


        } catch(error) {
            throw new Error(error.message || error.sqlMessage)

        }

    }

}


export default new PostDatabase()