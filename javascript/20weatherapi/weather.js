function getWeather(){
    let city = $('.cities')[0].value;
    //document.getElementsByClassName('cities')[0].value
    const weatherurl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    $.ajax({
        url:weatherurl,
        type:'GET',
        datatype:'json',
        success:function(data){
            console.log(data)
            $('#cityName')[0].innerText= data.city.name;
            $('#weather').empty();

            for(i=0;i<data.list.length;i++){
                $('#weather').append(
                    "<div class='card col-md-2'><div class='row'>"+
                    "<img class='card-img-top' src='https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png' alt='weather'/>"+
                    "<span class='topTemp'>"+data.list[i].temp.day+"°C</span></div><div class='card-body'>"+
                    "<span class='max'>"+data.list[i].temp.max+"</span>/<span class='min'>"+data.list[i].temp.min+"°C</span><h4 class='card-title'>"+data.list[i].weather[0].main+"</h4><p class='card-text'>"+
                    "<p class='day'>"+Date(data.list[i].dt)+"</p><p>Humidity:"+data.list[i].humidity+"</p></p></div></div>"
                )
            }
        }
    })
}