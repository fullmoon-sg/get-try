//require is eqv to the import in Python

const axios = require("axios");

// async function main(){

//     console.log("Hello World");
//     let response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//     console.log(response.data);
// }

// main();

async function postMovies(){

    let url = "https://ckx-movies-api.herokuapp.com";
    let response = await axios.post(url + "/posts", {
        "title" : "The royal trump",
        "plot" : "Comedy movie based corrupte official"
    });

    console.log(response.data)
} 

postMovies();
