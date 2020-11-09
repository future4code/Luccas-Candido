import {connection} from "../index"

export const taskById = async(id:number):Promise<any> => {
    
    const result = await connection.raw(
        `SELECT tasks.*, users.nickname FROM TodoListTask AS tasks
          JOIN TodoListUser AS users
          ON creator_user_id = users.id
          WHERE tasks.id = ${id}
          `
      );
      return result[0][0]
}