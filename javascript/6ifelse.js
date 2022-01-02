if(condition){
    // do something
}else{
     // do something
}

var a = 10
if(a%2 == 0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}
Number is even

var a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 11 is odd

var name = "Bhumika"

if(name == "Bhumika"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Priya"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
Hi Bhumika you are admin

// Ternary Operator
(single line if else)

condition ? if condition true : if condition false

var a = 10
a>10?"Hii":"Bie"
'Bie'

var a = 11
a>10?"Hii":"Bie"
'Hii'

var a = 10
a>10?a+1:a-1
9

var a = 11
a>10?a+1:a-1
12