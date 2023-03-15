// const answers = [];

// answers[0] = prompt ('Как вас зовут?', '');
// answers[1] = prompt ('Как ваша фамилия?', '');
// answers[2] = prompt (' Введите ваш возраст', '');

// document.write(answers);

// console.log(typeof(answers));



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors : {},
    genres : [],
    privat : false
};

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//       b = prompt('На сколько вы оцените его?', ''),
//       c  = prompt('Один из последних просмотреных фильмов?', ''),
//       d = prompt('На сколько вы оцените его?', '');

// personalMovieDB.movies[a]  = b;
// personalMovieDB.movies[c]  = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреных фильмов?', ''),
          b = prompt('На сколько вы оцените его?', '');

     if (a!= null && b != null && a != '' && b != '' && a.length <50){
        personalMovieDB.movies[a]  = b;
        console.log('Done');
     }  else {
        console.log('error');
        i--;
     }   
}   


if (personalMovieDB.count <2 ) {
    console.log('Ну прям очень мало');
} else if (personalMovieDB.count > 2  && personalMovieDB.count < 5) {
    console.log('Ну блин');

} else if (personalMovieDB.count > 10 && personalMovieDB.count < 20) {
    console.log('Давай еще немного');
}


    


console.log(personalMovieDB);
