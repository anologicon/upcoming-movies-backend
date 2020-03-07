# Upcoming movies!

### Approach

The challenge for that project it's build a simple architecture, and connect to a an movie API called TMDB APi. The </br> project have 2 repositories, one for back-end and other for the front-end.The front-end was builded with ReactJs</br>
and was used material ui for react, to build the UI. The back-end was used Node Js with the framework AdonisJs. Adonis provide a banch of tools, was uses Authentication and migration from AdonisJs. and the database Postgres, the database was used to save the API users, and their tokens.

The [front-end](https://github.com/anologicon/upcoming-movies-frontend/tree/master) it's hosted on [netlify](https://www.netlify.com/). </br>
The back-end it's hosted on [heroku](https://www.heroku.com/)

### Architecture

`app` - The logic application.</br>
` ---- Controllers/Http` - Here stay the controllers. </br>
` ---- DTO` - Here are the Data Tranfer Objects</br>
` ---- Models` - Here are the models, models can acces de database using Luci(ORM)</br>
` ---- Services` - Here are serves layers, they can access the providers layers, and separete the logic</br>
`config` - The configs for databases, here you can set the startup parâmeters.</br>
`database` - Here are the migrations and the factorys.</br>
`providers/TMDBApi` - The providers has the layer were as made the connection with TMDB API</br>
`start` - Routes, and the server boostrap</br>

### Used Packages

- `AdonisJs` - The nodejs frame-works. </br>
- `Axios` - Library to make HTTP requests. </br>
- `pg` - Used to connect to the Postgres database.</br>
- `url-parse` - Used to parse the url, to brake the one url string in parâmeters.</br>

### Run in localhost

**Requirements: docker, docker-compose, npm, NodeJs, adonisCli**</br>

First install all dependencies. </br>

```bash
npm install
```

Install adonis-cli
```bash
npm i -g @adonisjs/cli
```

Then start the Postegres with docker:

```bash
docker-compose up
```
Then run the migrations service with adonis cli:
```bash
adonis migration:run
```

And start the adonis in dev mode:
```bash
adonis serve --dev
```
Register your user on the end-point `/register`, the body needed:
```
{
	"username": "yout-user-name",
	"email": "your-email",
	"password": "your-password"
}
```

Get your token accessing the end-point `/authenticate`, the body needed:
```
{
	"email": "yout-user-name",
	"password": "your-password"
}
```

You will recive the body with a property `token`.

### End-points

**Register user**
- uri: `/register`
- method: `POST`
- body: 
```
{
	"username": "yout-user-name",
	"email": "your-email",
	"password": "your-password"
}
```
**Get token**
- uri: `/authenticate`
- method: `POST`
- body: 
```
{
	"email": "your-email",
	"password": "your-password"
}
```
- response:
```
{
  "type": "bearer",
  "token": "yout-token-hear",
  "refreshToken": null
}
```

**Get all upcoming movies, order by release date**
- uri: `[/]`
- method: `GET`
- parameters: 
  - `page`: `int`, the number of page requested.
  - `Authorization`: `yout bearer token`
- response:
```
{
  "page": 5,
  "totalPages": 500,
  "result": [
    {
      "title": "O2",
      "releaseDate": "2021-12-31",
      "poster": null,
      "overview": "A woman wakes up inside a cryogenic chamber with no memory of how she got there and must escape before her air runs out.",
      "genders": [
        "Science Fiction",
        "Thriller"
      ]
    }
]
```
**Search movies, by a query parâmeter**
- uri: `/search`
- method: `GET`
- parameters: 
  - `query`: `string`, The title of movie.
  - `Authorization`: `yout bearer token`
- response:
```
{
  "page": 1,
  "totalPages": 7,
  "result": [
    {
      "title": "Star Wars",
      "releaseDate": "1977-05-25",
      "poster": "/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
      "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "genders": [
        "Action",
        "Adventure",
        "Science Fiction"
      ]
    }
]
```


Now, the api it's running, and you can use the por `3333` to connect.</br>

Running in [http://localhost:3333](http://localhost:3333)
