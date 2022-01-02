var name = "Avengers"
var ind = "Hollywood"
var type = "Action"
var rating = 3.5

//es5
var a = "An "+name+" is an "+type+" movie, with rating of "+rating+" from ind "+ind+"."
'An Avengers is an Action movie, with rating of 3.5 from ind Hollywood.'

//es6
var a = `An ${name} is an ${type} movie, with rating of ${rating} from ind ${ind}.`
'An Avengers is an Action movie, with rating of 3.5 from ind Hollywood.'