'use strict'

const MovieService = use('App/Services/MovieService');

class MovieController {
    
    async list({request}) {

        const { page } = request.get(['page']);

        return await MovieService.upcomingMovies(page);
    }

    async search({ request }) {

        const { query } = request.get(['query']);

        return await MovieService.search(query);
    }
}

module.exports = MovieController
