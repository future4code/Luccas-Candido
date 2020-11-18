import { connection } from "../index"

export const insertAddress = async(logradouro:string, numero:number, complemento:string, bairro:string, cidade:string, estado:string):Promise<any> => {

    const result = await connection
    .insert({
        logradouro:logradouro,
        numero:numero, 
        complemento:complemento,
        bairro:bairro,
        cidade: cidade,
        estado: estado
    })
    .into("user_address")

    return result

}

