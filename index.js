const wrapper = document.querySelector(".wrapper")
const getLocationButton = document.querySelector(".get_location"),
  inputPart = document.querySelector(".input-part"),
  inputField = inputPart.querySelector("input"),
  informationText = inputPart.querySelector("#informationText");
cityName = inputPart.querySelector(".cityName");
min_temp = inputPart.querySelector("#min_temp");
maxtemp = inputPart.querySelector("#maxtemp");
maxtemp = inputPart.querySelector("#maxtemp");
humidity = inputPart.querySelector("#humidity");
feels_like = inputPart.querySelector("#feels_like");
pressure = inputPart.querySelector("#pressure");
(locationButton = inputPart.querySelector(".location img")),
  (weatherPart = wrapper.querySelector(".weather-part"));
let api;
inputPart.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
});
getLocationButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    requestApi(inputField.value);
  }
});
//=>working good
locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    console.log("clicked");
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("your browser dont support geolocation function");
  }
});
function requestApi(city) {
  //Fetching data using city name 
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=56a6ffd413c87e8412e6b1c774c4be8f`;
  console.log(api);
  //working good
  fetchData();
}
// fetching Data using Location
function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4ded145d1df37c52a0aa6c624e24de6a`
  console.log(api);
  fetchData();
}
function onError(error) {
  alert("error");
}
function fetchData() {
  fetch(api)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('City not found');
      }
    })
    .then((data) => {
      console.log(data); // Print data to the console
      //Do: Create a function that will display the data
      //average temperature
      var avgtemp = (data.main.temp > 273) ? (data.main.temp - 273) : data.main.temp;
      informationText.innerText = avgtemp.toFixed(0) + "°C";
      //get city name 
      cityName.innerText = (data.name)
      //get min_temp
      var minimumtemp = (data.main.temp_min > 273) ? (data.main.temp_min - 273) : data.main.temp_min;
      min_temp.innerText = minimumtemp.toFixed(2) + "°C\n Min Temp";
      //get max temp
      var max_temp = (data.main.temp_max > 273) ? (data.main.temp_max - 273) : data.main.temp_max;
      maxtemp.innerText = max_temp.toFixed(2) + "°C\nMax Temp";
      //get wind_speed
      wind_speed.innerText = (data.wind.speed) + " Kmph\n Wind Speed"
      //get humidity
      humidity.innerText = (data.main.humidity) + "% \n Humidity"
      //get feels_like
      var feelsLike = (data.main.feels_like > 273) ? (data.main.feels_like - 273) : data.main.feels_like;
      feels_like.innerText = feelsLike.toFixed(2) + "°C\n Feels Like";
      //get pressure
      pressure.innerText = (data.main.pressure) + " pa\n Pressure"

      // Change the background image based on the max_temp value
      max_temp = parseInt(max_temp);
      if (29 > max_temp && max_temp > 27.78) {
        document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIP.lc8rvYTLLtmQ-AujTkYfBwHaHa?pid=ImgDet&w=204&h=204&c=7&dpr=1.3")';
      } else if (27.79 >= max_temp && max_temp > 26) {
        document.body.style.backgroundImage = 'url("https://e0.pxfuel.com/wallpapers/260/729/desktop-wallpaper-spring-nature-place.jpg")';
        // document.body.style.color= "white";
      } else if (22 >= max_temp && max_temp > 18) {
        document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/R.14e746158ecee2622dd6216c4a76f520?rik=XXVOizRoeUZE6Q&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2014%2f03%2f31%2f5t.jpeg&ehk=OcA8w%2fAjZ8OctktnJGFa4bJ2%2fqbN1OONghpKbxtRXKw%3d&risl=&pid=ImgRaw&r=0")';
      } else {
        document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=600")';
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      informationText.innerHTML = 'City not found';
    });
}





// function fetchData() {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data); // Print data to the console
//       informationText.innerHTML = (data.main.temp > 273) ? (data.main.temp - 273) : data.main.temp;
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
// }