import { hash } from "../services/hashManager"
import {Request, Response} from "express"
import {insertUser} from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { insertAddress } from "../data/insertAddress"
import { getAddress } from "../services/getAddress"

export const createUser = async(req:Request, res:Response):Promise<void> => {


    try {

        const {email, password, name, role, cep, numero, complemento } = req.body

        let message = "Usuário criado com sucesso."

        if(email.indexOf("@") === -1 || !email) {
            res.statusCode = 406
            message = "Campo email e password são obrigatórios."
            throw new Error(message)
            
        }

        if(!password || password.length < 6) {
            res.statusCode = 406
            message = "Preencha o campo senha"
            throw new Error(message)
        }

        if(!name || !cep || !numero) {
            res.statusCode = 406;
            message = "Insira um valor válido para o campo 'name', 'cep' ou 'numero'"
            throw new Error(message)
            
        }


        const id = generateId()

        const cypherPassword = await hash(password)

        await insertUser(id, name, email, cypherPassword, role)

        const endereco = await getAddress(cep)

        await insertAddress(endereco.logradouro, numero, 
            complemento, 
            endereco.bairro, 
            endereco.cidade,
            endereco.estado)


        const token:string = generateToken({id, role})

        res.status(200).send({
            token,
        })
        
    } catch (error) {

        let {message} = error

        res.send(message)
        
    }


}
