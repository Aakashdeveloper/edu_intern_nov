var a = 10;
var b = 20;

a+b
30

function nameoffunction(parameters){
    return output
}

function add(a,b){
    return a+b
}
// a = 34
// b = 32
add(34,32)
66
add(20,301)
321
add("a","b")
'ab'


function isEven(userInput){
    var a;
    if(userInput%2==0){
        a = `Number ${userInput} is even`
    }else{
        a = `Number ${userInput} is odd`
    }
    return a
}

isEven(10)
'Number 10 is even'
isEven(11)
'Number 11 is odd'

//es5
function add(a,b){
    return a+b
}
add(1,2)
3
//es6 (arrow functions)
let add = (a,b) => {
     return a+b 
}
add(1,2)
3