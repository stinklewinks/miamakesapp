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

async function readRecipe(db_name, collection_name){
    // Read a recipe from a cookbook (collection) and return the value
}

async function deleteRecipe(db_name, collection_name, recipe_name){
    // Delete a recipe from a collection
}

async function editRecipe(db_name, collection_name, recipe_name){
    // Edit a recipe
}