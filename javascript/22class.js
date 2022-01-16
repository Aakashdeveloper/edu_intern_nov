/*function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}*/

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country; 
    }

    greet = () => {return `Say Hi to ${name}`}
}

var Hindi = new language1('Hindi','India')
Hindi
language1 {name: 'Hindi', country: 'India', greet: ƒ}