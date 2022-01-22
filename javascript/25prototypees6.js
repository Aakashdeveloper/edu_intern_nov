class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.98
    }
}

class language1 extends geo {
    constructor(name,country){
        super()
        this.name = name;
        this.country = country; 
    }

    greet = () => {return `Say Hi to ${name}`}
}

var Hindi = new language1('Hindi','India')

console.log(Hindi)

language1 {
    lat: 43.22,
    long: 32.98,
    greet: [Function: greet],
    name: 'Hindi',
    country: 'India'
  }