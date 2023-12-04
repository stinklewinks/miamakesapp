class Recipe {
    private name: String
    private author: String
    private description!: String
    private time = {
        prep: Number,
        cook: Number
    }
    private ingredients = [String]
    private steps = [String]
    private nutrition = {}


    __constructor(name: String, author: String){
        this.name = name;
        this.author = author;
    }

    getName(){
        return this.name;
    }

    updateName(name: String){
        this.name = name;
    }

    getAuthor(){
        return this.author;
    }

    updateAuthor(name: String){
        this.author = name;
    }

    getDesc(){
        return this.description;
    }

    changeDesc(content: String){
        this.description = content;
    }

    getPrepTime(){
        return this.time.prep;
    }

    setPrepTime(prep){
        this.time.prep = prep;
    }

    getCookTime(){
        return this.time.cook;
    }
    
    setCookTime(time){
        this.time.cook = time;
    }

    addIngred(ingred){

        this.ingredients.push(ingred);
    }

    getIngreds(){
        return this.ingredients;
    }

    addStep(step){
        this.steps.push(step);
    }

    getSteps(){
        return this.steps;
    }
}

export default Recipe;