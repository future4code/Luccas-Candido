import PostDatabase from "../data/PostDatabase";
import { Post, PostInput } from "../model/Post";
import Authenticator, { AuthenticationData } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import idGenerator from "../services/idGenerator";



class PostBusiness {

    public createPost = async(input:PostInput, token:string) => {
        

        try {
            const authentication:AuthenticationData = Authenticator.getData(token)

            if(!authentication) {
                throw new Error("Não autorizado.")
            }

            const myDate = new Date()


            if(!input.description || !input.photo || !input.type) {
                throw new Error("Invalid field to 'description', 'photo' or 'type'.")
            }

            const id:string = idGenerator.generateId()

            const newPost:Post = new Post(
                id,
                input.photo,
                input.description,
                input.type,
                myDate,
                authentication.id
            )

            const post:Post = await PostDatabase.createPost(newPost)

            return post


        } catch(error) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }

    }

    public getPostById = async(input:any, token:string):Promise<Post> => {

        const authentication:AuthenticationData = Authenticator.getData(token)

        if(!authentication) {
            throw new CustomError(401, "Unauthorized")
        }

        const post:Post = await PostDatabase.getPostById(input.id)

        if(!post) {
            throw new CustomError(404, "Post doest not exist")
        }

        return post
    }
    

    public getFeed = async(token:string):Promise<any> => {

        try {

            const authentication:AuthenticationData = Authenticator.getData(token)

            if(!authentication) {
                throw new CustomError(401, "Invalid token")
            }

    
            const feed = await PostDatabase.getFeed(authentication.id)


            if(!feed.length) {
                throw new CustomError(404, "No posts found!")
            }

            console.log(feed)


            return feed

        } catch(error) {

            throw new CustomError(400, error.message || error.sqlMessage)

        }

    }

}

export default new PostBusiness()