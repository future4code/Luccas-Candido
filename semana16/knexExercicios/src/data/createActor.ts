import {connection} from "../index"

export const createActor = async (
    id:string,
    name:string,
    salary:number,
    dateOfBirth: Date,
    gender:string

):Promise<void> => {

    await connection
    .insert({
        id:id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
    })
    .into("Actor")


}