// const wrapper = document.querySelector(".wrapper"),
//   inputPart = document.querySelector(".input-part"),
//   inputField = inputPart.querySelector("input"),
//   informationText = inputPart.querySelector(".information-text");
// (locationButton = inputPart.querySelector("button")),
//   (weatherPart = wrapper.querySelector(".weather-part"));

// let api;
// inputPart.addEventListener("keyup", (e) => {
//   if (e.key == "Enter" && inputField.value != "") {
//     requestApi(inputField.value);
//   }
// });
// //=>working good

// locationButton.addEventListener("click", () => {
//   if (navigator.geolocation) {
//     console.log("clicked");
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   } else {
//     alert("your browser dont support geolocation function");
//   }
// });

// function requestApi(city) {
//   //working good
//   api = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1c486ba2d04410f0ffbe9831e732251a;
//   console.log(api);
//   //working good
//   fetchData();
// }

// function onSuccess(position) {
//   const { latitude, longitude } = position.coords;

//   console.log(latitude,longitude);
//   api=https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1c486ba2d04410f0ffbe9831e732251a
// console.log(api);

//   fetchData();
// }
// function onError(error) {
//   alert("error");
// }

// function fetchData() {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => 
//     informationText.innerHTML=
//     console.log(data)
//     (data.main.temp>273)? (data.main.temp-273):data.main.temp
//     )
// }