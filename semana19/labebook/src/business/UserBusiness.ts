import { hash } from "bcryptjs"
import UserDatabase from "../data/UserDatabase"
import { CreateUserInput, User } from "../model/User"
import Authenticator, { AuthenticationData } from "../services/Authenticator"
import { CustomError } from "../services/CustomError"
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

            let{ message } = error

            if(message.includes("Duplicate")) {
                throw new CustomError(409, "E-mail já cadastrado")
            }
            
            throw new Error(error.sqlMessage || error.message)

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

    public userFriendship = async(input:any, token:string):Promise<any> => {

            try {

                const authentication:AuthenticationData = Authenticator.getData(token)

                const userId = authentication.id


                if(!input.id) {
                    throw new Error("Invalid user")

                } else if (input.id === authentication.id) {
                    throw new Error("You cant do this.")
                }

                if(!authentication) {
                    throw new Error("Invalid token")
                }

                await UserDatabase.userFriendship(userId, input.id)
                await UserDatabase.userFriendship(input.id, userId)

                return

        } catch(error) {

            let {message} = error

            if (message === "jwt expired") {
                throw new CustomError(401, "Unauthorized")
            }

            if(message.includes("Duplicate entry")) {
                throw new CustomError(409, "You already follow this user")
            } 

            throw new CustomError(400, error.sqlMessage || error.message)
            
        }

    }

    public deleteFriendship = async(input:any, token:string):Promise<any> => {

        try {

            const authentication:AuthenticationData = Authenticator.getData(token)

            const userId = authentication.id

            if(!input.userToUnfollow) {
                throw new CustomError(400, "Invalid user or invalid field")
            }

            if(!authentication) {
                throw new CustomError(401, "Invalid token")
            }

            await UserDatabase.deleteFriendship(userId, input.userToUnfollow)
            await UserDatabase.deleteFriendship(input.userToUnfollow, userId)

            return


        } catch(error) {
    

            throw new CustomError(400, error.sqlMessage || error.message)

        }

    }




}



export default new UserBusiness()