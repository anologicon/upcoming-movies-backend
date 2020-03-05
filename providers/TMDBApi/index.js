'use strict'

const axios = use('axios');

const Env = use('Env');

class Tmdb {

    constructor(Config) {
        this.Config = Config
    }

    /**
     * Request upcomming movies
     * 
     * @param {int} page The actual page
     */
    async getUpcommingMovies(page = 1) {
        
        const urlRequest = this.Config.get('tmdbapi.uri') + 'discover/movie' +
            this.getApiKey() +
            '&sort_by=release_date.desc' +
            '&include_adult=false' +
            '&include_video=false' +
            '&page=' + page;

        return await axios.get(urlRequest)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);

                return false;
            });
    }

    /**
     * Request all movies genres
     */
    async getGenreMovies() {

        const urlRequest = this.Config.get('tmdbapi.uri') + 'genre/movie/list' +
            this.getApiKey();

        return await axios.get(urlRequest)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);

                return false;
            });
    }

    /**
     * Request a list of movies based on string
     * 
     * @param {string} searchQuery 
     */
    async searchMovies(searchQuery) {

        const urlRequest = this.Config.get('tmdbapi.uri') + 'search/movie' +
            this.getApiKey() +
            '&include_adult=false' + 
            '&query=' + searchQuery;

        return await axios.get(urlRequest)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);

                return false;
            });
    }

    getApiKey() {
        return '?api_key=' + this.setApiKey();
    }

    setApiKey() {
        return this.Config.get('tmdbapi.apiKey');
    }
}

module.exports = Tmdb