import React from 'react'

function RecipeAdd() {
  return (
    <div className="flex col w:half m:auto pb:rel:10">
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
            <label><span className="playfair:display text:xlg">Times</span><fieldset>
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
            <label><span className="playfair:display text:xlg">Ingredients</span><fieldset>
                <input type="text" name="ingred one amount" id="ingred one amount" className="w:3" />
                    <select>
                            <option value="oz">Oz</option>
                            <option value="tsp">tsp</option>
                            <option value="tbsp">Tbsp</option>
                            <option value="--">--</option>
                    </select> <span>of </span>
                <input type="text" name="ingred one" id="ingred one" />
                <button className="w:15 h:5" onClick={(e) => {e.preventDefault()}}>Add An Ingredient</button>
            </fieldset></label>


            <label><span className="playfair:display text:xlg">Steps</span><fieldset>
                    <input type="text" name="step one" id="step one" /><br />
                    <input type="text" name="step two" id="step two" />
                    <button className="w:15 h:5" onClick={(e) => {e.preventDefault()}}>Add A Step</button>
                </fieldset></label>
            </div>
            </div>
            
            
        </form>
    </div>
  )
}

export default RecipeAdd