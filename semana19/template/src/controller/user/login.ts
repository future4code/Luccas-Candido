import { Request, Response } from "express"
import { getUserByEmail } from "../../business/user/getUserByEmail"
import selectUserByEmail, { User } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { compare } from "../../services/hashManager"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
    
   try {
    
        const input = {
            email: req.body.email,
            password: req.body.password
        }

        let message = "Usuário logado!"

        const token = await getUserByEmail(input)
        
        res.status(200).send({message, token})

      

   } catch (error) {
      let { message } = error

      if(message === "Cannot read property 'id' of undefined"){
         message = "Usuário não encontrado ou senha incorreta"
         res.statusCode = 404
      }
      
      if(message === "Field 'name' doesn't have a default value"){
         message = "Insira um nome para seu usuário"
         res.statusCode = 406
      }
      res.send({message})
   }
}