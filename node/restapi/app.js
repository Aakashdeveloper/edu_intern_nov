let express = require('express');
let app = express();
let port = 8210;

const city = [
    {
      "_id": "6187738a62a1816f8858634e",
      "location_id": 4,
      "location_name": "Bibvewadi, Pune",
      "state_id": 2,
      "state": "Maharashtra",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f8858634d",
      "location_id": 1,
      "location_name": "Ashok Vihar Phase 3, New Delhi",
      "state_id": 1,
      "state": "Delhi",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f8858634f",
      "location_id": 8,
      "location_name": "Jeevan Bhima Nagar, Bangalore",
      "state_id": 3,
      "state": "Karnataka",
      "country_name": "India"
    }
]

const hotel = [
        {
          "_id": "618776b162a1816f885956bc",
          "restaurant_id": 4,
          "restaurant_name": "The Appetite Momos",
          "location_id": 11,
          "state_id": 2,
          "address": "Kasarvadavli, Thane West, Thane, Mumbai",
          "restaurnat_thumb": "https://b.zmtcdn.com/data/pictures/chains/7/48607/d37a3f6dcaa58dcd563400d084607875.jpg",
          "average_rating": 4.5,
          "rating_text": "Very Good",
          "cost": 2100,
          "contact_number": "3496508401",
          "mealTypes": [
            {
              "mealtype_id": 4,
              "mealtype_name": "Snacks"
            },
            {
              "mealtype_id": 5,
              "mealtype_name": "Drinks"
            }
          ],
          "cuisines": [
            {
              "cuisine_id": 1,
              "cuisine_name": "North Indain"
            },
            {
              "cuisine_id": 3,
              "cuisine_name": "Chinese"
            }
          ],
          "image_gallery": [
            "https://b.zmtcdn.com/data/pictures/9/18812749/6d8902db42fcf423f86d353efcfca597.jpg",
            "https://b.zmtcdn.com/data/reviews_photos/2cb/64ffe4cd75031be1aa1cf792337d02cb_1589042698.jpg",
            "https://b.zmtcdn.com/data/reviews_photos/aa0/68eaaf502c40123e316ab06881e9faa0_1550157457.jpg",
            "https://b.zmtcdn.com/data/reviews_photos/f43/86a268598427ffe4f454644d75f58f43_1576856039.jpg"
          ]
        },
        {
          "_id": "618776b162a1816f885956bf",
          "restaurant_id": 7,
          "restaurant_name": "AMA Cafe",
          "location_id": 14,
          "state_id": 1,
          "restaurant_thumb": "https://b.zmtcdn.com/data/pictures/4/307374/b2b03be3aba61b0f173aa23e1abdb42b.jpg",
          "average_rating": 3.2,
          "rating_text": "Average",
          "cost": 450,
          "contact_number": 9674573343,
          "address": "House 6, New Colony, Majnu ka Tilla, New Delhi",
          "mealTypes": [
            {
              "mealtype_id": 2,
              "mealtype_name": "Lunch"
            },
            {
              "mealtype_id": 6,
              "mealtype_name": "Nightlife"
            }
          ],
          "cuisines": [
            {
              "cuisine_id": 1,
              "cuisine_name": "North Indian"
            },
            {
              "cuisine_id": 3,
              "cuisine_name": "Chinese"
            }
          ],
          "image_gallery": [
            "https://b.zmtcdn.com/data/reviews_photos/51b/7b7779a74b0ac806ac690da9cb55d51b_1560845012.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/4/307374/419ad47809c87816496b526cde26e780.jpg"
          ]
        }
]
//get
app.get('/',(req,res) => {
    res.send("Welcome to express")
})

//city
app.get('/city',(req,res) => {
    res.send(city)
})

//city
app.get('/hotels',(req,res) => {
    res.send(hotel)
})


app.listen(port,() => {
    console.log(`Listing to the port ${port}`)
})
