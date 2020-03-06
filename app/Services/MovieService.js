'use strict'

const TmdbMovies = use('Tmdb/Movies');

const UpcomingDTO = use ('App/DTO/Movie/Upcoming');

const MovieDTO = use('App/DTO/Movie');


const Config = use("Config");

class MovieService {
    
  constructor(Config) {
    this.Config = Config;
  }

  /**
   * Get all upcoming movies from TMDBApi
   * 
   * @param {int} page 
   */
  async upcomingMovies(page = 1) {

    const movieRawRequest = await TmdbMovies.getUpcomingMovies(page);

    if (!movieRawRequest) {
      return new UpcomingDTO(1, 0, []);
    }

    return this.cretePagedMovieResults(movieRawRequest);
  }

  /**
   * Search movies by string query
   * 
   * @param {string} searchQuery 
   */
  async search(searchQuery) {

    const resultSearch = await TmdbMovies.searchMovies(searchQuery);

    if (!resultSearch) {
      return new UpcomingDTO(1, 0, []);
    }
    
    return this.cretePagedMovieResults(resultSearch);
  }

  /**
   * Transform the raw result from provider in
   * a paged result object
   * 
   * @param {object} rawResult 
   */
  async cretePagedMovieResults(rawResult) {

      let listPaged = new UpcomingDTO(
        rawResult.page,
        rawResult.total_pages
      );

      const genresMoviesTmdbRaw = await TmdbMovies.getGenreMovies();

      const moviesResult = rawResult.results;

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
   * coming from API
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