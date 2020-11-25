import { connection } from "../connection";


export const insertUser = async(
id:string, 
name:string,
email:string, 
password:string, 
role:USER_ROLES) => {

    try {

        await connection.insert({
            id,
            name,
            email,
            password,
            role
        })
        .into('Aula_Arquitetura')

    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }

}

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}