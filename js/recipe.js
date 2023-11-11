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
}

define('recipe.js', 'recipe' ,Recipe);