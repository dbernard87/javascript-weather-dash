let inputSearch = document.querySelector('.locationSearch');
let repoList = document.querySelector('ul');
let fetchButton = document.querySelector('.searchButton');

function getApi() {
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputSearch.value + "&appid=0a4b3b2dc3abb0dca1990864d02586cd";
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            let currentName = document.querySelector('#name');
            let currentTemp = document.querySelector('#temp');
            let currentWind = document.querySelector('#wind');
            let currentHumidity = document.querySelector('#humidity');
            let listItem = document.createElement('button');

            listItem.classList.add("previousBtn");
            listItem.textContent = inputSearch.value;
            currentName.textContent = data['name'];
            currentTemp.textContent = data['main']['temp'];
            currentWind.textContent = data['wind']['speed'];
            currentHumidity.textContent = data['main']['humidity'];
            repoList.appendChild(listItem);
            return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data['coord']['lat'] + "&lon=" + data['coord']['lon'] + "&appid=0a4b3b2dc3abb0dca1990864d02586cd");
        })  
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            let currentUv = document.querySelector('#uv');
            
            currentUv.textContent = data['current']['uvi'];

            let weekDayOne = document.querySelector('#weekDayOne')
            let dayOne = document.querySelector('#dayOne');
            let iconOne = document.querySelector('#iconOne');
            let tempOne = document.querySelector('#tempOne');
            let windOne = document.querySelector('#windOne');
            let humidityOne = document.querySelector('#humidityOne');

            weekDayOne.textContent = moment.unix(data['daily'][1]['dt']).format("dddd");
            dayOne.textContent = moment.unix(data['daily'][1]['dt']).format("MMMM Do YYYY");
            iconOne.setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][1]['weather'][0]['icon'] + ".png");
            tempOne.textContent = "Temperature: " + data['daily'][1]['temp']['day'];
            windOne.textContent = "Wind Speed: " + data['daily'][1]['wind_speed'];
            humidityOne.textContent = "Humidity: " + data['daily'][1]['humidity'];

            let weekDayTwo = document.querySelector('#weekDayTwo')
            let dayTwo = document.querySelector('#dayTwo');
            let iconTwo = document.querySelector('#iconTwo');
            let tempTwo = document.querySelector('#tempTwo');
            let windTwo = document.querySelector('#windTwo');
            let humidityTwo = document.querySelector('#humidityTwo');

            weekDayTwo.textContent = moment.unix(data['daily'][2]['dt']).format("dddd");
            dayTwo.textContent = moment.unix(data['daily'][2]['dt']).format("MMMM Do YYYY");
            iconTwo.setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][2]['weather'][0]['icon'] + ".png");
            tempTwo.textContent = "Temperature: " + data['daily'][2]['temp']['day'];
            windTwo.textContent = "Wind Speed: " + data['daily'][2]['wind_speed'];
            humidityTwo.textContent = "Humidity: " + data['daily'][2]['humidity'];

            let weekDayThree = document.querySelector('#weekDayThree')
            let dayThree = document.querySelector('#dayThree');
            let iconThree = document.querySelector('#iconThree');
            let tempThree = document.querySelector('#tempThree');
            let windThree = document.querySelector('#windThree');
            let humidityThree = document.querySelector('#humidityThree');

            weekDayThree.textContent = moment.unix(data['daily'][3]['dt']).format("dddd");
            dayThree.textContent = moment.unix(data['daily'][3]['dt']).format("MMMM Do YYYY");
            iconThree.setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][3]['weather'][0]['icon'] + ".png");
            tempThree.textContent = "Temperature: " + data['daily'][3]['temp']['day'];
            windThree.textContent = "Wind Speed: " + data['daily'][3]['wind_speed'];
            humidityThree.textContent = "Humidity: " + data['daily'][3]['humidity'];

            let weekDayFour = document.querySelector('#weekDayFour')
            let dayFour = document.querySelector('#dayFour');
            let iconFour = document.querySelector('#iconFour');
            let tempFour = document.querySelector('#tempFour');
            let windFour = document.querySelector('#windFour');
            let humidityFour = document.querySelector('#humidityFour');

            weekDayFour.textContent = moment.unix(data['daily'][4]['dt']).format("dddd");
            dayFour.textContent = moment.unix(data['daily'][4]['dt']).format("MMMM Do YYYY");
            iconFour.setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][4]['weather'][0]['icon'] + ".png");
            tempFour.textContent = "Temperature: " + data['daily'][4]['temp']['day'];
            windFour.textContent = "Wind Speed: " + data['daily'][4]['wind_speed'];
            humidityFour.textContent = "Humidity: " + data['daily'][4]['humidity'];

            let weekDayFive = document.querySelector('#weekDayFive')
            let dayFive = document.querySelector('#dayFive');
            let iconFive = document.querySelector('#iconFive');
            let tempFive = document.querySelector('#tempFive');
            let windFive = document.querySelector('#windFive');
            let humidityFive = document.querySelector('#humidityFive');

            weekDayFive.textContent = moment.unix(data['daily'][5]['dt']).format("dddd");
            dayFive.textContent = moment.unix(data['daily'][5]['dt']).format("MMMM Do YYYY");
            iconFive.setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][5]['weather'][0]['icon'] + ".png");
            tempFive.textContent = "Temperature: " + data['daily'][5]['temp']['day'];
            windFive.textContent = "Wind Speed: " + data['daily'][5]['wind_speed'];
            humidityFive.textContent = "Humidity: " + data['daily'][5]['humidity'];
        })  
}   

fetchButton.addEventListener('click', getApi);