import { connection } from "../index"
import { recipe } from "../types/recipes"

export const insertRecipes = async(recipes:recipe):Promise<any> => {

    const result = await connection
    .insert({
        id:recipes.id,
        description:recipes.description, 
        title:recipes.title,
        user_id:recipes.user_id
    })
    .into("cookenu_recipes")

    return result

}

