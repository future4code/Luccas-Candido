import {connection} from "../index"

export const updateSalary = async(id:string, salary:number):Promise<void> => {
    
    await connection("Actor")
    .update({
        salary:salary
    })
    .where("id", id)
  

}