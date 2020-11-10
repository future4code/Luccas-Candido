import { connection } from "../index"

export const insertUser = async(id:string, name:string, email:string, password:string, role:string):Promise<any> => {

    const result = await connection
    .insert({
        id:id,
        name:name, 
        email:email,
        password:password,
        role: role
    })
    .into("user_class_50")

    return result

}

