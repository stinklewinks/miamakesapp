class User {
    private name: String
    private email: String
    private username: String
    private password!: String

    __constructor(name: String, email: String, username: String){
        this.name = name;
        this.email = email;
        this.username = username;
    }
}

class Author extends User {
        private recipes = [Object]
         
        recipesMade(){
            return this.recipes.length;
        }

        getRecipes(){
            return this.recipes;
        }

        createRecipe(recName: String, desc: String, ingreds = [String]){
            const recipe = {
                name: recName,
                description: desc,
                ingredients: ingreds
            };

            return recipe
        }



}

export {User, Author}