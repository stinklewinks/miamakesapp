class Recipe {
        constructor(){
            this.content = {
                id: '',
                 name: 'Recipe',
                 author: '',
                 description: {
                    overall : '',
                    nutrition: '',
                },
                times: {
                    prep: '',
                    cook: ''
                },
                ingredients: [],
                steps: []
                    } 

            console.log(`${this.content.name} is created: ${this.content.description.overall}`);
        }

        changeRecipeName(newName){
            this.content.name = newName;
        }

        viewRecipeName(){
            return this.content.name;
        }

        viewDescription(){
            return this.content.description;
        }
    };
