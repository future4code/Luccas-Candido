import PostDatabase from "../data/PostDatabase";
import { Post, PostInput } from "../model/Post";
import Authenticator, { AuthenticationData } from "../services/Authenticator";
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


        } catch(error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }

    public getPostById = async(input:any, token:string):Promise<Post> => {

        const authentication:AuthenticationData = Authenticator.getData(token)

        if(!authentication) {
            throw new Error("Unauthorized")
        }

        const post:Post = await PostDatabase.getPostById(input.id)

        if(!post) {
            throw new Error("Post doest not exist")
        }

        return post
    }

}

export default new PostBusiness()