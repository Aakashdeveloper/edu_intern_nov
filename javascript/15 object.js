var a = [] // array
var b = {} // object

var movieName = "Avengers"
var movieRating = 4.5
var movieType = 'Action'

var movieName1 = "Jab We Met"
var movieRating1 = 4.8
var movieType1 = 'Romantic'

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}
undefined
typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'
movie.rating = 4.3
4.3
movie
{name: 'Avengers', rating: 4.3, type: 'Action'}
movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.3, type: 'Action', ind: 'Hollywood'}
delete movie.type
true
movie
{name: 'Avengers', rating: 4.3, ind: 'Hollywood'}

movie['name']
'Avengers'
movie['rating']= 4.8
4.8