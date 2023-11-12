const app = async ()=>{
    try {
        const dupe = await callAPI('http://127.0.0.1:3001');
        const data =  dupe[0].name;
        document.getElementById('recipe').textContent = data;
        console.log(data);
     }
    catch(error){
        console.error('Error: ', error);
    }
}

app();