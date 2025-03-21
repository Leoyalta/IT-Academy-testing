// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
// Aquesta funció ha de rebre com a paràmetre el/la director/a per al qual es volen buscar les seves pel·lícules, i retorna l'array de pel·lícules que ha dirigit.!!!
function getMoviesFromDirector(array, director) {
  const fitereByDirector = array.filter((movie) => movie.director === director);
  // const result = fitereByDirector.map((movie) => movie.title);
  console.log('EXERCICE 2 ->', fitereByDirector);
  return fitereByDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const fileredByDierctor = array.filter(
    (movie) => movie.director === director
  );

  const scoresSum = fileredByDierctor.reduce(
    (acc, movie) => acc + movie.score,
    0
  );
  const averege = scoresSum / fileredByDierctor.length;
  console.log('EXERCICE 3 ->', averege);
  return Number(averege.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const arrOfTitles = array.map((movie) => movie.title);
  const sortedByAlfab = arrOfTitles.toSorted();
  const noMoreThanTwenty = sortedByAlfab.slice(0, 20);
  console.log('EXERCICE 4 ->', noMoreThanTwenty);
  return noMoreThanTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arrOfValues = array.map((movie) => {
    const { title, year } = movie;
    if (year && title) {
      return { title, year };
    } else if (year && !title) {
      return { year };
    } else if (!year && title) {
      return { title };
    } else {
      return {};
    }
  });

  const sortedByAsc = arrOfValues.toSorted((firstValue, secondValue) => {
    if (firstValue.year !== secondValue.year) {
      return firstValue.year - secondValue.year;
    }
    return firstValue.title.localeCompare(secondValue.title);
  });

  console.log(sortedByAsc);
  return sortedByAsc;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const filteredByGenre = array.filter((movie) => movie.genre.includes(genre));
  const scoresSum = filteredByGenre.reduce(
    (acc, movie) => acc + movie.score,
    0
  );
  const averege = scoresSum / filteredByGenre.length;
  console.log('EXERCICE 6 ->', averege);
  return Number(averege.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const convertToMitutes = array.map((movie) => {
    const splitedString = movie.duration.split(' ');
    const durationInMinutes = splitedString.reduce((acc, time) => {
      if (time.includes('h')) {
        return acc + parseInt(time) * 60;
      } else {
        return acc + parseInt(time);
      }
    }, 0);
    return { duration: durationInMinutes };
  });
  console.log('EXERCICE 7 ->', convertToMitutes);
  return convertToMitutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const filteredByYear = array.filter((movie) => movie.year === year);
  const bestMovie = filteredByYear.reduce((max, movie) =>
    movie.score > max.score ? movie : max
  );
  console.log('EXERCICE 8 ->', bestMovie);
  return [bestMovie];
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
