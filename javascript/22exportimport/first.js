let dbObj = {}

dbObj.user = [
    {
        name:'Alvin',
        city:'Boston'
    },
    {
        name:'Priya',
        city:'Paris'
    }
]

dbObj.dbQuery = {
    sum: function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

//es5
module.exports = dbObj;

//es6
//export default dbObj