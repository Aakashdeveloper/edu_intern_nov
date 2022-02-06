Page 1
List of city
> http://localhost:6700/location
> https://zomatoajulypi.herokuapp.com/location
List of restaurants 
> http://localhost:6700/restaurants
> https://zomatoajulypi.herokuapp.com/restaurants
restaurants wrt to city 
> http://localhost:6700/restaurants?state_id=4
> https://zomatoajulypi.herokuapp.com/restaurant?stateId=1
quick search data  
> http://localhost:6700/mealType
> https://zomatoajulypi.herokuapp.com/quicksearch

(http://localhost:6700/restaurants?state_id=4&meal_id=5)
Page 2
restaurants wrt to quickSearch 
> http://localhost:6700/restaurants?meal_id=5
> https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=


filter
> cuisine filter
  data respect to cuisine and quickSearch 
  > http://localhost:6700/filter/3?cuisine=4
  > https://zomatoajulypi.herokuapp.com/filter/4?cuisine=1
> cost filter
  > http://localhost:6700/filter/1?lcost=200&hcost=500
  > https://zomatoajulypi.herokuapp.com/filter/1?hcost=1000&lcost=500
 data respect to cuisine and cost 
> cuisine filter + cost filter 
  > http://localhost:6700/filter/1?lcost=200&hcost=500&cuisineId=1

> sort
    sort low to high in same quickSearch
    http://localhost:6700/filter/1?cuisineId=1&sort=1
    sort high to low in same quickSearch
    http://localhost:6700/filter/1?cuisineId=1&sort=-1

> pagination
   > http://localhost:6700/filter/1?cuisineId=1&skip=2&limit=2


Page 3
> restaurants details
> http://localhost:6700/details/2
> http://zomatoajulypi.herokuapp.com/details/1

> Menu of that restaurants
> http://localhost:6700/menu/2
> https://zomatoajulypi.herokuapp.com/menu/1


page 4
> menu items on user selection
  > localhost:6700/menuItem
  > http://zomatoajulypi.herokuapp.com/menuItem
  > body [1,4,5]

> api to place order
  > localhost:6700/placeOrder

page 5
> list all order
  > http://localhost:6700/orders
  > http://localhost:6700/orders?email="aakash@gmail.com"

Delete order 
> localhost:6700/deleteOrder
 

 update order
 > localhost:6700/updateOrder/61ffab62c39f96bf7ba39676?status=Success