import { connection } from "../index"


export const selectUserResponsible = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    SELECT users.id, users.nickname FROM TodoListResponsibleUserTaskRelation AS tasksR
    JOIN TodoListUser AS users
    ON tasksR.responsible_user_id = users.id
    WHERE tasksR.task_id = ${id};
    `)

    return result[0]
}
