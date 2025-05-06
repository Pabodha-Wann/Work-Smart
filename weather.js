const searchBtn = document.querySelector(".search");
const city = document.getElementById("city");
const apiKey = "9a05a33dbc411cea33d55cfefd556da8";
const weatherIcon = document.querySelector(".weather-icon");
const displayError =  document.querySelector(".displayError");
const weather = document.querySelector(".weather");

searchBtn.addEventListener("click", ()=>{
    if(city.value){
        getWeatherData(city.value);
        
    }
    else{
        displayError.innerHTML="Please Enter a City";
        weather.style.display="none";
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    //console.log(response);

    if(!response.ok){
        displayError.innerHTML="Invalid City";
        weather.style.display="none";
        throw new Error("Could not fetch data");  
    }
    
    var weatherData =  await response.json();
    console.log(weatherData);

    document.querySelector(".displayCity").innerHTML=weatherData.name;
    document.querySelector(".displayTemp").innerHTML=Math.ceil(weatherData.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=weatherData.main.humidity + "%";
    document.querySelector(".wind").innerHTML=weatherData.wind.speed + "km\\h";
    

    switch(weatherData.weather[0].main){
        case "Clouds":
            weatherIcon.src = "images/cloudy.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rainy.png";
            break;
                    
        case "Drizzle":
            weatherIcon.src = "images/cloudy.png";
            break;
                        
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
    }

    weather.style.display="block";


}



