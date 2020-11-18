import { Post } from "../model/Post"
import { User } from "../model/User"
import {connection} from "./connection"

class UserDatabase {

    private tableName:string = "labook_users"

    public getTableName = ():string => this.tableName

    public async signup(
        user:User
        ) {

        try {

            await connection.insert({
                id:user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()            
            })
            .into(this.getTableName)
    
        } catch(error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }

    public getUserByEmail = async(email:string):Promise<User> => {

        try {

            const result = await connection.raw(`
            SELECT * FROM labook_users as user
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


}

export default new UserDatabase()