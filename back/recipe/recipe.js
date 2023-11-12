const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
class Recipe {
    static name = 'Recipe name';
    static description = 'Recipe Description';

    constructor(){
        return `${this.name} is created: ${this.description}`;
    }

    changeRecipeName(newName){
        this.name = newName;
    }

    viewRecipeName(){
        return this.name;
    }

    viewDescription(){
        return this.description;
    }
};

async function createRecipe(db_name, collection_name){
    // Create a recipe and add it to a collection
}

async function createCookbook(db_name, collection_name){
    // Create a cookbook (collection) that stores recipes
}

async function readRecipe(){
    // Read a recipe from a cookbook (collection) and return the value
    const client = new MongoClient(uri);
    try { 
        await client.connect();
        const db = client.db('Volume001');
        const collection = db.collection('Recipes');

        const recipe = await collection.find({}).toArray();
        if(recipe){
            return recipe;
        }
        else {
            console.log('Recipe not found');
            return null;
        }
    }
    catch(error) { 
        console.error("Error reading recipe: ", error);
    }
    finally {
        await client.close();
    }
}

async function deleteRecipe(db_name, collection_name, recipe_name){
    // Delete a recipe from a collection
}

async function editRecipe(db_name, collection_name, recipe_name){
    // Edit a recipe
}

module.exports = {
    readRecipe
}