/*-------------------- Global Variables --------------------*/
let inputSearch = document.querySelector('.locationSearch');
let previousSearch = document.querySelector('.previousSearch');
let searchButton = document.querySelector('.searchButton');
let clearButton = document.querySelector('.clearButton');
let pastSearches = localStorage.getItem('location');

/*------------ If Statement For Displaying Past Searches ------------*/
if (pastSearches == null) {
    pastSearches = [];      
} else {
    pastSearches = JSON.parse(pastSearches);
}

/*-------------------- Add Past Search Function --------------------*/
function addPastSearch(city) {
    let listItem = document.createElement('button');
    listItem.addEventListener('click', function() {
        inputSearch.value = city;
        document.querySelector('#currentSpan').textContent = inputSearch.value;
        document.querySelector('#fiveDaySpan').textContent = inputSearch.value;
        getApi();
    })
    listItem.classList.add("previousBtn");
    listItem.textContent = city;
    previousSearch.appendChild(listItem);
}

for (let pastSearch of pastSearches) {
    addPastSearch(pastSearch);
}

/*-------------------- Get Weather and One Call API Function --------------------*/
function getApi() {
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputSearch.value + "&units=imperial&appid=0a4b3b2dc3abb0dca1990864d02586cd";
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            if (!pastSearches.includes(inputSearch.value)) {
                addPastSearch(inputSearch.value);
                pastSearches.push(inputSearch.value)
                localStorage.setItem('location', JSON.stringify(pastSearches));
            }
            /*-------------------- Current Weather Div Dynamic Styling --------------------*/
            document.querySelector('#currentSpan').textContent = inputSearch.value;
            document.querySelector('#fiveDaySpan').textContent = inputSearch.value;
            document.querySelector('#name').textContent = data.name;
            document.querySelector('#temp').textContent = "Temperature: " + data.main.temp + "°F";
            document.querySelector('#wind').textContent = "Wind Speed: " + data.wind.speed + " MPH";
            document.querySelector('#humidity').textContent = "Humidity: " + data.main.humidity + "%";
            return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&units=imperial&appid=0a4b3b2dc3abb0dca1990864d02586cd");
        })  
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            /*-------------------- UV Index Dynamic Styling --------------------*/
            document.querySelector('#currentDay').textContent = moment.unix(data.daily[0].dt).format("dddd");
            document.querySelector('#currentDate').textContent = moment.unix(data.daily[0].dt).format("MMMM Do YYYY");
            document.querySelector('#icon').setAttribute('src', "https://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png");
            document.querySelector('#uv').textContent = "UV Index: " + data.current.uvi;
            /*-------------------- If Statement To Set UV Index Background Color --------------------*/
            if (data.current.uvi < 3) {
                document.querySelector('#uv').setAttribute('style', 'background-color: #28a745;');
            } else if (data.current.uvi >= 3 && data.current.uvi <= 5) {
                document.querySelector('#uv').setAttribute('style', 'background-color: #ffc107;');
            } else if (data.current.uvi >= 6 && data.current.uvi <= 7) {
                document.querySelector('#uv').setAttribute('style', 'background-color: #fd7e14;');
            } else if (data.current.uvi >= 8 && data.current.uvi <= 10) {
                document.querySelector('#uv').setAttribute('style', 'background-color: #dc3545;');
            }
            /*-------------------- Day One Div Dynamic Styling --------------------*/
            document.querySelector('#weekDayOne').textContent = moment.unix(data.daily[1].dt).format("dddd");
            document.querySelector('#dayOne').textContent = moment.unix(data.daily[1].dt).format("MMMM Do YYYY");
            document.querySelector('#iconOne').setAttribute('src', "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png");
            document.querySelector('#tempOne').textContent = "Temperature: " + data.daily[1].temp.day + " °F";
            document.querySelector('#windOne').textContent = "Wind Speed: " + data.daily[1].wind_speed + " MPH";
            document.querySelector('#humidityOne').textContent = "Humidity: " + data.daily[1].humidity + "%";
            /*-------------------- Day Two Div Dynamic Styling --------------------*/
            document.querySelector('#weekDayTwo').textContent = moment.unix(data.daily[2].dt).format("dddd");
            document.querySelector('#dayTwo').textContent = moment.unix(data.daily[2].dt).format("MMMM Do YYYY");
            document.querySelector('#iconTwo').setAttribute('src', "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png");
            document.querySelector('#tempTwo').textContent = "Temperature: " + data.daily[2].temp.day + " °F";
            document.querySelector('#windTwo').textContent = "Wind Speed: " + data.daily[2].wind_speed + " MPH";
            document.querySelector('#humidityTwo').textContent = "Humidity: " + data.daily[2].humidity + "%";
            /*-------------------- Day Three Div Dynamic Styling --------------------*/
            document.querySelector('#weekDayThree').textContent = moment.unix(data.daily[3].dt).format("dddd");
            document.querySelector('#dayThree').textContent = moment.unix(data.daily[3].dt).format("MMMM Do YYYY");
            document.querySelector('#iconThree').setAttribute('src', "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png");
            document.querySelector('#tempThree').textContent = "Temperature: " + data.daily[3].temp.day + " °F";
            document.querySelector('#windThree').textContent = "Wind Speed: " + data.daily[3].wind_speed + " MPH";
            document.querySelector('#humidityThree').textContent = "Humidity: " + data.daily[3].humidity + "%";
            /*-------------------- Day Four Div Dynamic Styling --------------------*/
            document.querySelector('#weekDayFour').textContent = moment.unix(data.daily[4].dt).format("dddd");
            document.querySelector('#dayFour').textContent = moment.unix(data.daily[4].dt).format("MMMM Do YYYY");
            document.querySelector('#iconFour').setAttribute('src', "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png");
            document.querySelector('#tempFour').textContent = "Temperature: " + data.daily[4].temp.day + " °F";
            document.querySelector('#windFour').textContent = "Wind Speed: " + data.daily[4].wind_speed + " MPH";
            document.querySelector('#humidityFour').textContent = "Humidity: " + data.daily[4].humidity + "%";
            /*-------------------- Day Five Div Dynamic Styling --------------------*/
            document.querySelector('#weekDayFive').textContent = moment.unix(data.daily[5].dt).format("dddd");
            document.querySelector('#dayFive').textContent = moment.unix(data.daily[5].dt).format("MMMM Do YYYY");
            document.querySelector('#iconFive').setAttribute('src', "https://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + "@2x.png");
            document.querySelector('#tempFive').textContent = "Temperature: " + data.daily[5].temp.day + " °F";
            document.querySelector('#windFive').textContent = "Wind Speed: " + data.daily[5].wind_speed + " MPH";
            document.querySelector('#humidityFive').textContent = "Humidity: " + data.daily[5].humidity + "%";
        })  
}   

/*-------------------- Clear Button Event Listener and Function --------------------*/    
clearButton.addEventListener('click', function() {
    localStorage.removeItem('location');
    document.querySelector('.previousBtn').remove();
})

/*-------------------- Input Enter Key Down Event Listener and Function  --------------------*/
document.querySelector('#mainInput').addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        document.querySelector('#currentSpan').textContent = inputSearch.value;
        document.querySelector('#fiveDaySpan').textContent = inputSearch.value;   
        getApi();
    }
});

/*-------------------- Search Button Event Listener --------------------*/
searchButton.addEventListener('click', getApi);