// iterate over the values
for(let i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Venice', 'Pune', 'Mumbai', 'London', 'Dubai', 'Delhi', 'Amsterdam']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var category = [
    {
        "id":1,
        "name":"Live Events"
    },
    {
        "id":2,
        "name":"Movies"
    },
    {
        "id":3,
        "name":"Plays"
    },
    {
        "id":4,
        "name":"Sports"
    },
    {
        "id":5,
        "name":"Music"
    }
]

for(i=0;i<category.length;i++){
    console.log(`<li>${category[i].name}</li>`)
}
Live Events
Movies
Plays
Sports

<li>Live Events</li>
<li>Movies</li>
<li>Plays</li>
<li>Sports</li>
<li>Music</li>

var city = ['Delhi', 'Mumbai',['Red','Yellow','Green',"Orange"], 'Venice', 'Dubai']

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    } 
}

//// for of (es6)
var city = ['Venice', 'Pune', 'Mumbai', 'London', 'Dubai', 'Delhi', 'Amsterdam']

for(mycity of city){
    console.log(mycity)
}


var city = ['Delhi', 'Mumbai',['Red','Yellow','Green',"Orange"], 'Venice', 'Dubai']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(colors of mycity){
            console.log(colors)
        }
    }else{
        console.log(mycity)
    }
   
}