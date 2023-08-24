const API_KEY = 'api_key=6879faab5e7c80d9084e3861f635f9cb';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL= BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500/';
const SEARCH_URL= BASE_URL + '/search/movie?'+ API_KEY


getMovies(API_URL);

const main=document.getElementById('main');
const form=document.getElementById('form');
const search=document.getElementById('search')


function getMovies(url){

    fetch(url).then(res => res.json()).then( data => {
        console.log(data)
        showMovies(data.results);
    })
};

function showMovies(data){

    main.innerHTML=``;

    data.forEach(movie => {
        const{title,poster_path,vote_average,overview}=movie;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML=`<div class="movie">
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">  <b>overview </b>
     <h3> ${overview}</h3>
    </div>
    </div>
    
`
main.appendChild(movieEl)
    });
};
function getColor (vote){
    if(vote>8){
        return 'green'
    }
    else if(vote>= 5){
        return 'yellow'
    }
    else{
        return 'red'
    }
};
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm=search.value;
    if(searchTerm){
        getMovies(SEARCH_URL+'&query='+searchTerm)
    }else {
  
getMovies(API_URL);      
    }

})
