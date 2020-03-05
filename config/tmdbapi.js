'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {

    // Uri base for call the TMDB API
    uri: 'https://api.themoviedb.org/3/',
    
    // Get the key to acess the TMDB API
    apiKey: Env.get('TMDB_API_KEY'),
}