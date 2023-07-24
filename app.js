const apiKey="4724c0b424d226a80a6f7f934cf231cd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let place =document.querySelector('.city');
let temp=document.querySelector('.temp');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let search=document.querySelector('.button')
const searchBox=document.querySelector('.search input');
let weatherIcon=document.querySelector('.weather-icon');


async function checkWeather(city){
	const response =await fetch(apiUrl +city+ `&appid=${apiKey}`);
	var data=await response.json();
	place.innerHTML=data.name
	temp.innerHTML=Math.round(data.main.temp)+"°C"
	humidity.innerHTML=data.main.humidity+"%"
	wind.innerHTML=data.wind.speed+"km/h"

	if(data.weather[0].main=="Clouds"){
		weatherIcon.src="images/clouds.png"
	}
	else if(data.weather[0].main=="Drizzle"){
		weatherIcon.src="images/drizzle.png"
	}
	else if(data.weather[0].main=="Clear"){
		weatherIcon.src="images/clear.png"
	}
	else if(data.weather[0].main=="Mist"){
		weatherIcon.src="images/mist.png"
	}
	else if(data.weather[0].main=="Rain"){
		weatherIcon.src="images/rain.png"
	}
	else if(data.weather[0].main=="Snow"){
		weatherIcon.src="images/snow.png"
	}

	document.querySelector('.weather').style.display="block";
}

search.addEventListener('click',()=>{
	checkWeather(searchBox.value)
})

window.addEventListener("DOMContentLoaded",()=>{
	searchBox.value="";
})

searchBox.addEventListener('keydown',(e)=>{
	if(e.key=="Enter"){
		checkWeather(searchBox.value)
	}
})

