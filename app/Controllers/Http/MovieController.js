'use strict'

const MovieService = use('App/Services/MovieService');


class MovieController {
    
    async list({request}) {

        const { page } = request.get(['page']);

        return await MovieService.upCommingMovies(page);
    }
}

module.exports = MovieController
