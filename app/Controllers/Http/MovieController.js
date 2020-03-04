'use strict'

const TmdbMovies = use('Tmdb/Movies');


class MovieController {
    
    async list({request}) {
        return await TmdbMovies.getHomeMovies();
    }
}

module.exports = MovieController
