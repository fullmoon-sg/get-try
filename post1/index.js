const axios = require("axios");

async function getMovies(){
    let url = "https://ckx-movies-api.herokuapp.com";
    let response = await axios.get(url + "/movies");
    console.log(response.data);
}


async function main(){
let url = "https://jsonplaceholder.typicode.com";
let response = await axios.post(url + "/posts", {
"userId": 405,
"id": 505,
"title" : "This is my first post",
"body": "Experiment begins"
})
console.log(response.data);
};

getMovies();
