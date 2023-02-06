const apiKey = 'b89fc45c2067cbd33560270639722eae';

async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const response = await fetch(url);
  return response.json();
}
async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const response = await fetch(url);
  const {results} = await response.json();
  return results;
}

async function getTopMoviesIds(n = 3) {
  const popularMovies = await getPopularMovies();
  return popularMovies.slice(0, n).map(movie => movie.id)
}

async function getTopMoviesInParallel() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map(id => getMovie(id));

  return Promise.all(moviePromises);
}

async function getFastestTopMovie() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map(id => getMovie(id));

  return Promise.race(moviePromises);
}

async function getTopMoviesInSequence() {
  const ids = await getTopMoviesIds();
  const movies = [];

  for (const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }

  return movies;
}

function renderMovies(movies) {
  const movieList = document.getElementById('movies');
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <img alt="${movie.title}" src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
            <h5>${movie.title}</h5>
            <p>Released on <em>${movie.release_date}</em></p>
            `;

    movieList.appendChild(listItem);
  });
}

document.getElementById('sequence').onclick = async function () {
  const movies = await getTopMoviesInSequence();
  renderMovies(movies);
}

document.getElementById('parallel').onclick = async function () {
  const movies = await getTopMoviesInParallel();
  renderMovies(movies);
}

document.getElementById('fastest').onclick = async function () {
  const movie = await getFastestTopMovie();
  renderMovies([movie]);
}
