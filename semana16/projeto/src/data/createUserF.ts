import {connection} from "../index"

export const createUserF = async (name:string, nickname: string, email:string):Promise<any> => {

    await connection
    .insert({
        name: name,
        nickname: nickname,
        email: email
    })
    .into("TodoListUser")
}