import { Post } from "../model/Post"
import BaseDatabase from "./BaseDatabase"


class PostDatabase extends BaseDatabase{

    private static tableName:string = "labook_posts"

    public createPost = async(post:Post):Promise<any> => {

        try {

        await BaseDatabase.connection
        .insert({
           id:post.getId(),
           photo: post.getPhoto(),
           description: post.getDescription(),
           type: post.getType(),
           author_id: post.getAuthorId()
        })
        .into(PostDatabase.tableName)


        } catch(error) {
            throw new Error(error.message || error.sqlMessage)

        }

    }


    public getPostById = async(id:string):Promise<Post> => {

        try {       

        const result = await BaseDatabase.connection.raw(`
        
        SELECT * FROM ${PostDatabase.tableName} as post
        WHERE post.id = "${id}"
        `)

        return new Post(
            result[0][0].id,
            result[0][0].photo,
            result[0][0].description,
            result[0][0].type,
            result[0][0].createdAt,
            result[0][0].author_id,

        )

        } catch(error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }


    public getFeed = async(userId:string) => {

        const result = await BaseDatabase.connection.raw(`
        SELECT post.author_id, post.photo, post.description, friendship.friend_id, friendship.user_id 
        FROM labook_posts as post
        JOIN Relation_Friendship as friendship
        ON post.author_id = friendship.friend_id
        WHERE friendship.user_id = "${userId}";
        
        `)

        return result[0]

    }
}


export default new PostDatabase()