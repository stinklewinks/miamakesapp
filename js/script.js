const recipeModule = new window.classes.recipe.Recipe();
const newRecipe = recipeModule;
newRecipe.changeRecipeName("Soup");
console.log(newRecipe.viewRecipeName()); // Output: "Soup"