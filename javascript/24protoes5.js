function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var john = new human('John','Delhi')
undefined
john
human {name: 'John', city: 'Delhi'}
var pepper = new robot('Pepper')
undefined
pepper
robot {name: 'Pepper', legs: 2, age: 10}


human.prototype = new robot()

var kevin = new human('kevin','Moscow')

kevin
human {name: 'kevin', city: 'Moscow'}
kevin.age
10
kevin.legs
2
john.legs
undefined
john.age