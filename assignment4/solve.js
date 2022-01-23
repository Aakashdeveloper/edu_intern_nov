var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]

let distinct = [];
for(i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant) == -1){
        distinct.push(ratingData[i].restaurant)
    }
    
}

let unique = ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut']
let avgRating = [];
let outrating = 0;
let count = 0;

for(i=0;i<unique.length;i++){
    for(j=0;j<ratingData.length;j++){
        if(unique[i] == ratingData[j].restaurant){
            outrating +=ratingData[j].rating;
            count = count +1
        }
    }

    var output = Number(outrating)/Number(count);
    var myobj = {}
    myobj.restaurant = unique[i];
    myobj.avgRating = output;
    avgRating.push(myobj);
    count = 0;
    outrating = 0
}


// part B

var output =[
    {restaurant: 'KFC', avg: 4},
    {restaurant: 'Burger King', avg: 4},
    {restaurant: 'Domino', avg: 1.5},
    {restaurant: 'Subway', avg: 3.5},
    {restaurant: 'Pizza Hut', avg: 5}
]

output.filter((data) => {return data.avg>=4})

var final = [
    {restaurant: 'KFC', avg: 4},
    {restaurant: 'Burger King', avg: 4},
    {restaurant: 'Pizza Hut', avg: 5}
];
