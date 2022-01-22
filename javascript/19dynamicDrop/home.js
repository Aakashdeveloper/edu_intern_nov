let url = "http://localhost:1298/city";
let hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

// function getCity(){
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         for(i=0;i<data.length;i++){
//             let element = document.createElement('option')  //<option></option>
//             let text = document.createTextNode(data[i].city_name) // Delhi
//             element.appendChild(text) //<option>Delhi</option>
//             element.value = data[i]._id //<option value="1">Delhi</option>
//             document.getElementById('city').appendChild(element)
//             /*<select>
//                 <option value="1">Delhi</option>
//             </select>*/
//         }
//     })
// }

//es6
/*
async function getCity(){
    let response = await fetch(url)
    let data = await response.json()
    for(i=0;i<data.length;i++){
        let element = document.createElement('option')
        let text = document.createTextNode(data[i].city_name)
        element.appendChild(text)
        element.value = data[i]._id
        document.getElementById('city').appendChild(element)
    }
}*/

const getCity =  async () => {
    let response = await fetch(url)
    let data = await response.json()
    for(i=0;i<data.length;i++){
        let element = document.createElement('option')
        let text = document.createTextNode(data[i].city_name)
        element.appendChild(text)
        element.value = data[i]._id
        document.getElementById('city').appendChild(element)
    }
}

const getHotel = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(`${item.name} | ${item.city_name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
            return 'ok'
        })
        /*
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name} | ${data[i].city_name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
        }*/
    })
}
