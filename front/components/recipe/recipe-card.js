const recipe_name = 'Potato Soup';
const recipe_desc = 'A soup';
const nutrition = {
    calories: '200',
    servingSize: 4,
    totalFat: 3,
    protein: 4,
    totalCarbs: 20,
    sodium: 200,
    cholesterol: 10
};
const recipe_prep_time = 10;
const recipe_cook_time = 10;
const recipe_steps = ['Cook', 'Eat'];
const recipe_ingreds = ['Water', 'Eggs', 'Ketchup'];

// Create Component Parts
// Heading element

const template = ` 
        <div class="bg-sunset text:white h-40" id="col-1">
            <div class="flex col">
                <h2 class="playfair:display text:lg text:center">${recipe_name}</h2> 
            </div>
            <div class="flex items:center around">
                <div class="col">
                    <p class="poppins text:lg">
                        ${recipe_desc}
                    </p>
                    <span class="poppins">${recipe_prep_time}</span> | <span class="poppins">${recipe_cook_time}</span>
                    <ul class="list:none">
                        ${recipe_ingreds.map(ingred => `<li class="poppins">${ingred}</li>`).join('')}
                    </ul>
                </div>
                <div class="col">
                
                    <h2 class="playfair:display">Steps</h2>
                        <ol class="">
                            ${recipe_steps.map(step => `<li class="poppins">${step}</li>`).join('')}
                        </ol>
                </div>
                <div class="col" id="col-2">
                    <table>
                        <tr>
                            <th class="lato">Name</th>
                            <th class="lato">Value</th>
                        </tr>
                        <tr>
                            <td class="poppins">Calories</td>    
                            <td class="poppins">${nutrition.calories}</td>
                        </tr>
                        <tr>
                            <td class="poppins">Protein</td>    
                            <td class="poppins">${nutrition.protein}</td>
                        </tr>
                    </table>
                </div> 
            </div>
            
        </div>
        
        
`

const main_container = document.createElement('section');
main_container.setAttribute('id', 'recipe-card');
main_container.innerHTML = template;
document.body.append(main_container);
