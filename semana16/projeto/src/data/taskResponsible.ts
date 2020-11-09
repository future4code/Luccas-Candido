import { connection } from "../index"


export const taskResponsible = async (taskId:number, responsibleUserId:number):Promise<any> => {

    const result = await connection
    .insert({
        task_id:taskId,
        responsible_user_id: responsibleUserId
    })
    .into("TodoListResponsibleUserTaskRelation")

    return result
    

}