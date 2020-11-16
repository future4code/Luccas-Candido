import {connection} from "../connection"

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export const insertUser = async(
id:string, name:string, 
nickname:string,
email:string, 
password:string, 
role:USER_ROLES):Promise<any> => {

    try {

        await connection.insert({
            id,
            name,
            nickname,
            email,
            password,
            role
        }).into('Aula_Arquitetura')

    } catch(error) {
        throw new Error(error.sqlMessage)
    }

}