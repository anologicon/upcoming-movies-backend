'use strict'

const TmdbMovies = use('Tmdb/Movies');

const Config = use("Config");

class MovieService {
    
  constructor(Config) {
    this.Config = Config;
  }

  async upCommingMovies(page = 1) {

    const movieRawRequest = await TmdbMovies.getUpcommingMovies(page);

    if (!movieRawRequest) {
      return [];
    }

    let listPaged = {
      page: movieRawRequest.page,
      totalPages: movieRawRequest.total_pages,
      result: [],
    }

    let resultArray = movieRawRequest.results.map((movie) => (
      {
        title: movie.title,
        releaseDate: movie.release_date,
        poster: movie.poster_path,
        overview: movie.overview,
        genders: []
      }
    ));

    listPaged.result = resultArray;

    return listPaged;
  }
}

module.exports = new MovieService(Config);