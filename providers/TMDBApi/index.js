'use strict'

const axios = use('axios');

const Env = use('Env');

class Tmdb {

    constructor(Config) {
        this.Config = Config
    }

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

    getApiKey() {
        return '?api_key=' + this.setApiKey();
    }

    setApiKey() {
        return this.Config.get('tmdbapi.apiKey');
    }
}

module.exports = Tmdb