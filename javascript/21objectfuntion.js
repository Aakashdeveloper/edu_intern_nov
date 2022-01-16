let calc = {
    sum: function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sub(5,2)
3

///////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}country: "India"greet: () => {return `Say Hi to ${name}`}name: "Hindi"[[Prototype]]: Object
Hindi.greet()
'Say Hi to Hindi'
Hindi.name
'Hindi'

var English = new language('English','USA')
English
language {name: 'English', country: 'USA', greet: ƒ}