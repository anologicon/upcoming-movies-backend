'use strict';

class Movie {

    constructor(
        title, 
        releaseDate, 
        poster, 
        overview, 
        genders
    ) {
        this.title = title;

        this.releaseDate = releaseDate;

        this.poster = poster;

        this.overview = overview;

        this.genders = genders;
    }
}

module.exports = Movie;