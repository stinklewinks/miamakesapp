import React, {useState} from 'react'
import IngredientForm from './ingreds'
import StepForm from './steps'


function RecipeAdd() {
  return (
    <div className="flex col w:65 m:auto pb:rel:10">
        <h2 className="text:xxlg playfair:display">Add a Recipe</h2>
        <form>
            {/* Container (row) */}
            <div className="flex around items:center">


            {/* Left  (col)*/}
            <div className="flex col w:30 bg:gray-200">
                <h2 className="playfair:display text:xlg">Basic Info</h2>
                <fieldset>
                    <label htmlFor="recipe-name"><span className="poppins text:md">Name of Recipe: </span><input type="text" id="recipe name"/></label><br />
                    <label><span className="poppins text:md">Description</span><textarea></textarea></label><br />
                </fieldset>
            <label><span className="playfair:display text:xlg">Times</span>
            <p className="poppins text:md"> Please input the times it takes to prepare the ingredients and cooking the dish.</p>
            <fieldset>
                    <span className="poppins text:md">Prep Time: </span><input className="w:3" type="text" name="prep time" id="prep time" />
                    <select>
                            <option value="sec">sec</option>
                            <option value="min">min</option>
                            <option value="hr">hr</option>
                            <option value="--">--</option>
                    </select><br />
                    <span className="poppins text:md">Cook Time: </span><input className="w:3" type="text" name="cook time" id="cook time" />
                    <select>
                            <option value="sec">sec</option>
                            <option value="min">min</option>
                            <option value="hr">hr</option>
                            <option value="--">--</option>
                    </select>
                </fieldset></label>
            </div>



            {/* Right (col)*/}
            <div className="flex col w:30 bg:gray-200">
            <h2>Section Two</h2>
            <label><span className="playfair:display text:xlg">Ingredients</span>
            <fieldset id="add-ingreds">
                <IngredientForm />
            </fieldset></label>


            <label><span className="playfair:display text:xlg">Steps</span><fieldset>
                    <StepForm />
                </fieldset></label>
            </div>
            </div>
            
            
        </form>
    </div>
  )
}

export {RecipeAdd}