import { Post } from "../model/Post"
import { User } from "../model/User"
import BaseDatabase from "./BaseDatabase"

class UserDatabase extends BaseDatabase{

    private static tableName:string = "labook_users"

    public async signup(
        user:User
        ) {

        try {

            await BaseDatabase.connection.insert({
                id:user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()            
            })
            .into(UserDatabase.tableName)
    
        } catch(error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }

    public getUserByEmail = async(email:string):Promise<User> => {

        try {

            const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${UserDatabase.tableName} as user
            WHERE user.email = "${email}"
            `)
    
            return new User(
                result[0][0].id,
                result[0][0].name,
                result[0][0].email,
                result[0][0].password
            )
    
    
        } catch(error) {
        throw new Error(error.message || error.sqlMessage)
        }


    }


    public userFriendship = async(userId:string, friendId:string) => {

        const result = await BaseDatabase.connection
        .insert({
            user_id: userId,
            friend_id: friendId
        })
        .into("Relation_Friendship")

        return result

    }

    public deleteFriendship = async(userId:string, friendId:string) => {

        const result = await BaseDatabase.connection.raw(`
        DELETE FROM Relation_Friendship
        WHERE user_id = "${userId}" AND friend_id = "${friendId}"
        
        `)

        return result
    }


}

export default new UserDatabase()