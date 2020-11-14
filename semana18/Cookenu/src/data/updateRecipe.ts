import {connection} from ".."


export const updateRecipe = async(recipeId:string, userId:string, title:string, description:string):Promise<any> => {

    const result = await connection.raw(`
    UPDATE cookenu_recipes as recipe
    SET recipe.title = "${title}", recipe.description = "${description}"
    WHERE recipe.id = "${recipeId}" AND recipe.user_id = "${userId}";
    `)


    return result[0][0]
}