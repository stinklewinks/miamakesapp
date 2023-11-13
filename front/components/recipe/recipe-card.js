const recipe_name = 'Potato Soup';
const recipe_desc = 'A soup';
const nutrition = {
    calories: '200'
};
const recipe_prep_time = 10;
const recipe_cook_time = 10;
const recipe_steps = ['Cook', 'Eat'];
const recipe_ingreds = ['Water', 'Eggs', 'Ketchup'];

// Create Component Parts
// Heading element

const template = `
        <div>
            <h2>${recipe_name}</h2>
            <span>${recipe_prep_time}</span> | <span>${recipe_cook_time}</span>
            <ul class="list:none">
            ${recipe_ingreds.map(ingred => `<li>${ingred}</li>`).join('')}
             </ul>
        <div>
            <p>
                ${recipe_desc}
            </p>
        <div>
            <h2>Steps</h2>
            <ol class="list:none">
                ${recipe_steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        </div>
        <div>
            <table>
                <tr>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>${nutrition.calories}</td>
                </tr>
            </table>
        </div>
        </div>
`

const main_container = document.createElement('section');
main_container.setAttribute('id', 'recipe-card');
main_container.innerHTML = template;
