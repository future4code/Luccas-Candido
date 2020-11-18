import {connection} from ".."


export const selectAllRecipes = async(id:string):Promise<any> => {


    try {

        const result = await connection.raw(`
        SELECT recipe.id, recipe.title, recipe.description, 
        recipe.createdAt, user.id as userId, user.name FROM cookenu_recipes as recipe
        JOIN cookenu_user as user
        WHERE user.id = "${id}" AND recipe.user_id = user.id;
        `)


        return result[0]

    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }

}