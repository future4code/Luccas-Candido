import {connection} from "../index";

export const createTaskF = async(title:string, description:string, limitDate: Date,
    creatorUserId:number):Promise<any> => {

    
    
    await connection
    .insert({
        title:title,
        description:description,
        limit_date: new Date(limitDate),
        creator_user_id: creatorUserId
    })
    .into("TodoListTask")


}