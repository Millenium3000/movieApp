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

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c  = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[a]  = b;
personalMovieDB.movies[c]  = d;

console.log(personalMovieDB);
