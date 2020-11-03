import {connection} from "../index"

export const deleteActor = async(id:string):Promise<void> => {
    await connection("Actor").
    delete()
    .where("id", id)
}