const recipeModule = new window.classes.recipe.Recipe();
const newRecipe = recipeModule;
newRecipe.changeRecipeName("Soup");
document.getElementById('recipe').innerHTML = newRecipe.viewRecipeName() // Output: "Soup"


const app = async ()=>{
    let dupe;
    try {
    dupe = await callAPI('http://127.0.0.1:3001').then(
     (res)=>{
        let data = res.Hello;
        document.getElementById('recipe').textContent = data;
     });
    }
    catch(error){
        console.error('Error: ', error);
    }
}

app();