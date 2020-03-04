'use strict'

const axios = require('axios');

class Tmdb {
    constructor(Config) {
        this.Config = Config
    }

    async getHomeMovies() {
        return await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d&language=pt-BR&sort_by=release_date.desc&include_adult=false&include_video=false')
            .then(function (response) {
                // handle success
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
}

module.exports = Tmdb