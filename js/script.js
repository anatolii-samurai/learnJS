let numberOfFilms = prompt("How many films did you watch?","");

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
// let a = prompt ('Один из последних просмотренных фильмов?','');
//     b = prompt ('Насколько оцените его','');
//     c = prompt ('Один из последних просмотренных фильмов?','');
//     d = prompt ('Насколько оцените его','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

for(let i = 0; i < 2; i++){
    let a = prompt ('Один из последних просмотренных фильмов?','');
    let b = prompt ('Насколько оцените его','');
    if ( a!=null && b!=null && a!='' && b!='' && a.length<50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('Error!');
        i--;
    }
    if (personalMovieDB.count<10){
        console.log('Просмотренно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы киноман');
    }else {
        console.log('Error');
    }
         
    
    
}