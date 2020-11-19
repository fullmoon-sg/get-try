const axios = require("axios");

async function editMovies(){

    let url = "https://ckx-movies-api.herokuapp.com";
    let response = await axios.patch(url + "/movie/5fb4c1cab4f44550712da26c",{

        title : "Gong Fu",
        plot : "The lord is in trouble"
    })
console.log(response.data);
}

editMovies();

async function getMovies(){
 let response = await axios.get("https://ckx-movies-api.herokuapp.com/movies");
console.log(response.data);

}

getMovies();