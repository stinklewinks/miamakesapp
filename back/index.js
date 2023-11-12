const express = require('express');
const cors = require('cors');
const {db_start, db_stop} = require('./db.js');
const {readRecipe} = require('./recipe/recipe.js');

const app = express();
const PORT = 3001;

app.use(cors());
app.get('/', async (req, res) => {
    try {
        const allRecipes = await readRecipe('your-database-name', 'your-collection-name');

        if (allRecipes.length > 0) {
            res.json(allRecipes); // Send the recipes as JSON
        } else {
            res.status(404).json({ message: 'No recipes found.' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

async function start(){
    try{
        db_start();
        app.listen(PORT, ()=>{
        console.log(`Console is listening on port: ${PORT}`);
    });
    }
    catch(error) {
        console.error('Error starting the db and server: ', error);
    }
}

async function stop(){
    await db_stop();
}

start();

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('Received SIGINT. Closing server and database connection...');
    stopServer().finally(() => {
        process.exit(0);
    });
});