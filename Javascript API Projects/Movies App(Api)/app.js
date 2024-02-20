const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// Most popular movies provide kregi without searching any Keyword
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Search krne k bad jo movies aayngi 

async function getMovies(api){
const response = await fetch(api)
const data = await response.json()
console.log(data)
}  

getMovies(APIURL)
    // init call - page load hote hi jo hum function call karaate h  


    const showMovies = (data) =>{
        data.forEach(element => {
            
        });
    }