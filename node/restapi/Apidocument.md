Page 1
List of city    
List of restaurants 
hotels wrt to city 
quick search data   

Page 2
restaurants wrt to quickSearch 

filter
> cuisine filter
  data respect to cuisine and quickSearch 
> cost filter
 data respect to cuisine and cost 
> cuisine filter + cost filter 
> sort
    sort low to high in same quickSearch
    sort high to low in same quickSearch
> pagination


Page 3
> restaurants details
> Menu of that restaurants

page 4
> api to place order

page 5
> list all order

 

/////
 (get) restaurants>         https://zomatoajulypi.herokuapp.com/restaurants
(get) restwrtcity >        https://zomatoajulypi.herokuapp.com/restaurant?stateId=1
(get) hoteldetails >       http://zomatoajulypi.herokuapp.com/details/1
(get) quickSearch>         https://zomatoajulypi.herokuapp.com/quicksearch
(get) onbasisofMeal >      https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=

(get) cuisinefilter >      https://zomatoajulypi.herokuapp.com/filter/4?cuisine=1

(get) costfilter >         https://zomatoajulypi.herokuapp.com/filter/1?hcost=1000&lcost=500

(get) cityname >           https://zomatoajulypi.herokuapp.com/location
(get) menu >               https://zomatoajulypi.herokuapp.com/menu/1

(post) orderspage >        http://zomatoajulypi.herokuapp.com/menuItem
                           body [1,4,5]
(get) allorder>            
(post)placeOrder >   