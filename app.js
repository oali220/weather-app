let weather = {
  apikey: "24ca40f3b3ec02c76a6ba6420678f15b",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city 
    +"&units=metric&appid=" 
    + this.apikey,
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },

  displayWeather: function(data) {
    let { name } = data;
    const { icon } = data.weather[0];
    const{ temp, temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp_min, temp_max, speed);
    document.querySelector(".cityname").innerText = name;
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp-min").innerText = temp_min;
    document.querySelector(".temp-max").innerText = temp_max;
    document.querySelector(".humidity").innerText = humidity;
    document.querySelector(".wind").innerText = speed;
    document.querySelector(".current-weather").innerText = temp;
  }

}


