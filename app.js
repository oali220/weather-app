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
    const{ temp_min, temp_max } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp_min, temp_max, speed);
  }

}


