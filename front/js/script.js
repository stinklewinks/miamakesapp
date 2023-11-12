const app = async ()=>{
    // Add the recipe class
    if(!window.variables.recipe){
        window.variables.recipe = {}
        window.variables.recipe = {Recipe}
        }
    else {
            window.variables.recipe = {Recipe};
        }

    const init = window.variables.recipe;
    const recipe = new init.Recipe();
    
    try {
        const dupe = await callAPI('http://127.0.0.1:3001');
        const data =  dupe[0].name;
        recipe.name = data;
        document.getElementById('recipe').textContent = recipe.name;
        console.log(recipe.name);
     }
    catch(error){
        console.error('Error: ', error);
    }
}

app();