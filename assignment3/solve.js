// part 1 -a
class restaurantManager{

    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    /// part1-b
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }

    ///part1-c
    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data) => {
            return data.city === cityName
        })
    }
}

var restObj = new restaurantManager()
//restObj.printAllRestaurantNames()
//['KFC', 'Domino', 'Burger King', 'Subway']
restObj.filterRestaurantByCity('Pune')
console.log(restObj.filterRestaurantByCity('Pune'))

//////part2-a/////
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

var out = 0;
for(key in orderData){
    console.log(orderData[key])
    //out = out+Number(orderData[key])
    out += Number(orderData[key])
}
//199

/*
20/199*100
10.050251256281408
29/199*100
14.572864321608039
30/199*100
15.07537688442211
44/199*100
22.110552763819097
76/199*100
38.19095477386934

calculate total order
find %
create final obj
push into array
*/



function getPercent(orderData){
    var total = 0;
    for(key in orderData){
        total += Number(orderData[key])
    }

    var output = [];
    var count = 0;
    for(key in orderData){
        var percentValue=(orderData[key]/total)*100;
        count = count+1;
        let myobj = {}
        myobj.id = count;
        myobj.order=key;
        myobj.order_percentage=percentValue;
        myobj.restaurant="Punjabi Tadka"
        ///console.log(myobj)
        output.push(myobj)
    }
    return output
}

var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

console.log(getPercent(orderData))