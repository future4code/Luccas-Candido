import {connection} from "../index"

export const avgSalary = async(gender:string):Promise<void> => {
    const result = await connection("Actor")
    .avg("salary as average")
    .where("gender", gender)

    return console.log(result[0].average.toFixed(2))
    
}