"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    ectors: {},
    genres: [],
    privat: false
};

const a = prompt('Сколько фильмов вы уже посмотрели?', ''),
      b = prompt('НА сколько оцените его?', ''),
      c = prompt('Сколько фильмов вы уже посмотрели?', ''),
      d = prompt('НА сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);