import { hash } from "bcryptjs"
import UserDatabase from "../data/UserDatabase"
import { CreateUserInput, User } from "../model/User"
import Authenticator from "../services/Authenticator"
import hashManager from "../services/hashManager"
import IdGenerator from "../services/idGenerator"




class UserBusiness {

    public signup = async(input: CreateUserInput):Promise<string>=> {

        try {
            if (!input.name || !input.email || !input.password) {
               throw new Error('"name", "email" and "password" must be provided')
            }
    
            if(input.email.indexOf("@") === -1) {
                throw new Error("Invalid E-mail")
            }
    
            if(input.password.length < 6) {
                throw new Error("Password must be have 6 character at least")
            }
      
            const id: string = IdGenerator.generateId()
      
            const cypherPassword = await hashManager.hash(input.password);
      
    
            const newUser:User = new User(
                id,
                input.name,
                input.email,
                cypherPassword
            )

            await UserDatabase.signup(newUser)

            const token: string = Authenticator.generateToken({ id })
            
            return token
                
      
         } catch(error) {
            throw new Error(error.message)
         }

    }

    public getUserByEmail = async(input:any):Promise<string> => {

        try {

            if(!input.email || !input.password || input.email.indexOf("@") === -1) {
                throw new Error("Invalid password or e-mail")
            }
        
            const user = await UserDatabase.getUserByEmail(input.email)

            if(!user) {
                throw new Error("User doest not exist or invalid password")
            }

            const isPasswordCorrect = await hashManager.compare(input.password, user.getPassword())

            if(!isPasswordCorrect) {
                throw new Error("Wrong password or e-mail")
            }

            const token:string = Authenticator.generateToken({id:user.getId()})

            return token
            
        } catch(error) {
            throw new Error(error.message)
        }
    }

}



export default new UserBusiness()