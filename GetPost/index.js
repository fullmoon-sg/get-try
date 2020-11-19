const axios = require("axios");

// async function postMovies(){

//     let url = "https://ckx-movies-api.herokuapp.com";
//     let response = await axios.post(url + "/movie/create", {
//         title : "Kung Fu",
//         plot : "Comedy movie based kung fu series"
//     });

//     console.log(response.data)
// } 

// postMovies();



async function getMovies(){
 let response = await axios.get("https://ckx-movies-api.herokuapp.com/movies");
console.log(response.data);

}

getMovies();
