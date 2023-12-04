class User {
     username;
     password;
     email;
     interests = [];

    __constructor(name, email){
        this.username = name;
        this.email = email;
    }
}

class Creator extends User {
    __constructor(){
        
    }
    
    static expertise = [];
    static yearsCooked;
    static recipesMade;
    static popularRecipes = [];

}