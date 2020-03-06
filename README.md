# Upcomming movies!

### Approach

The chalenge for that project it's build a simple architecture, and connect to a an movie API called TMDB APi. The </br> project have 2 repositories, one for back-end and other for the front-end.The front-end was builded with ReactJs</br>
with desing helper react material ui core. The back-end was used NodeJs with the frame-work AdonisJs, Adonis provide a</br>
a banche of tools, was uses Authentication and migration from AdonisJs. And the database Postgres, the database was used to save the API users, and theirs token's.

### Architecture

`app` - The logic application.</br>
` ---- Controllers/Http` - Here stay the controllers. </br>
` ---- DTO` - Here are the Data Tranfer Objects</br>
` ---- Models` - Here are the models, models can acces de database using Luci(ORM)</br>
` ---- Services` - Here are serves layers, they can access the providers layers, and separete the logic</br>
`config` - The configs for databases, here you can set the startup parâmeters.</br>
`database` - Here are the migrations and the factorys.</br>
`start` - Routes, and the server boostrap</br>
