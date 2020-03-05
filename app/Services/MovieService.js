'use strict'

const TmdbMovies = use('Tmdb/Movies');

const UpcommingDTO = use ('App/DTO/Movie/Upcomming');

const MovieDTO = use('App/DTO/Movie');


const Config = use("Config");

class MovieService {
    
  constructor(Config) {
    this.Config = Config;
  }

  /**
   * Get all upcomming movies from TMDBApi
   * 
   * @param {int} page 
   */
  async upCommingMovies(page = 1) {

    const movieRawRequest = await TmdbMovies.getUpcommingMovies(page);

    if (!movieRawRequest) {
      return [];
    }

    let listPaged = new UpcommingDTO(
      movieRawRequest.page,
      movieRawRequest.total_pages
    );

    const genresMoviesTmdbRaw = await TmdbMovies.getGenreMovies();

    const moviesResult = movieRawRequest.results;

    const moviesArray = moviesResult.map(
      (movie) => this.createMovie(movie, genresMoviesTmdbRaw.genres)
    );

    listPaged.result = moviesArray;

    return listPaged;
  }

  /**
   * Create a object type MovieDTO
   * 
   * @param {object} movieRaw 
   * @param {array} genresMoviesTmdbRaw 
   */
  createMovie(movieRaw, genresMoviesTmdbRaw) {
    return new MovieDTO(
      movieRaw.title,
      movieRaw.release_date,
      movieRaw.poster_path,
      movieRaw.overview,
      this.getMovieGenre(movieRaw.genre_ids, genresMoviesTmdbRaw)
    )
  }

  /**
   * Find genders for movie, by genders has
   * comming from API
   * 
   * @param {array} movieGendersI Array with genres off actual movie
   * @param {array} genresTmdb Array with all genders from API
   */
  getMovieGenre(
    movieGendersI,
    genresTmdb
  ) {
    return movieGendersI.map((genreMovieId) => (
      genresTmdb.find(genre => genre.id == genreMovieId).name
    ));
  }

}

module.exports = new MovieService(Config);