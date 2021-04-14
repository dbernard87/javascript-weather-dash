let inputSearch = document.querySelector('.locationSearch');
let repoList = document.querySelector('.previousSearch');
let fetchButton = document.querySelector('.searchButton');

function getApi() {
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputSearch.value + "&appid=0a4b3b2dc3abb0dca1990864d02586cd";
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            let listItem = document.createElement('button');

            listItem.classList.add("previousBtn");
            listItem.textContent = inputSearch.value;
            document.querySelector('#name').textContent = data['name'];
            document.querySelector('#temp').textContent = "Temperature: " + data['main']['temp'];
            document.querySelector('#wind').textContent = "Wind Speed: " + data['wind']['speed'];
            document.querySelector('#humidity').textContent = "Humidity: " + data['main']['humidity'];
            repoList.appendChild(listItem);
            return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data['coord']['lat'] + "&lon=" + data['coord']['lon'] + "&appid=0a4b3b2dc3abb0dca1990864d02586cd");
        })  
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            document.querySelector('#uv').textContent = "UV Index: " + data['current']['uvi'];

            document.querySelector('#weekDayOne').textContent = moment.unix(data['daily'][1]['dt']).format("dddd");
            document.querySelector('#dayOne').textContent = moment.unix(data['daily'][1]['dt']).format("MMMM Do YYYY");
            document.querySelector('#iconOne').setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][1]['weather'][0]['icon'] + ".png");
            document.querySelector('#tempOne').textContent = "Temperature: " + data['daily'][1]['temp']['day'];
            document.querySelector('#windOne').textContent = "Wind Speed: " + data['daily'][1]['wind_speed'];
            document.querySelector('#humidityOne').textContent = "Humidity: " + data['daily'][1]['humidity'];

            document.querySelector('#weekDayTwo').textContent = moment.unix(data['daily'][2]['dt']).format("dddd");
            document.querySelector('#dayTwo').textContent = moment.unix(data['daily'][2]['dt']).format("MMMM Do YYYY");
            document.querySelector('#iconTwo').setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][2]['weather'][0]['icon'] + ".png");
            document.querySelector('#tempTwo').textContent = "Temperature: " + data['daily'][2]['temp']['day'];
            document.querySelector('#windTwo').textContent = "Wind Speed: " + data['daily'][2]['wind_speed'];
            document.querySelector('#humidityTwo').textContent = "Humidity: " + data['daily'][2]['humidity'];

            document.querySelector('#weekDayThree').textContent = moment.unix(data['daily'][3]['dt']).format("dddd");
            document.querySelector('#dayThree').textContent = moment.unix(data['daily'][3]['dt']).format("MMMM Do YYYY");
            document.querySelector('#iconThree').setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][3]['weather'][0]['icon'] + ".png");
            document.querySelector('#tempThree').textContent = "Temperature: " + data['daily'][3]['temp']['day'];
            document.querySelector('#windThree').textContent = "Wind Speed: " + data['daily'][3]['wind_speed'];
            document.querySelector('#humidityThree').textContent = "Humidity: " + data['daily'][3]['humidity'];

            document.querySelector('#weekDayFour').textContent = moment.unix(data['daily'][4]['dt']).format("dddd");
            document.querySelector('#dayFour').textContent = moment.unix(data['daily'][4]['dt']).format("MMMM Do YYYY");
            document.querySelector('#iconFour').setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][4]['weather'][0]['icon'] + ".png");
            document.querySelector('#tempFour').textContent = "Temperature: " + data['daily'][4]['temp']['day'];
            document.querySelector('#windFour').textContent = "Wind Speed: " + data['daily'][4]['wind_speed'];
            document.querySelector('#humidityFour').textContent = "Humidity: " + data['daily'][4]['humidity'];

            document.querySelector('#weekDayFive').textContent = moment.unix(data['daily'][5]['dt']).format("dddd");
            document.querySelector('#dayFive').textContent = moment.unix(data['daily'][5]['dt']).format("MMMM Do YYYY");
            document.querySelector('#iconFive').setAttribute('src', "http://openweathermap.org/img/w/" + data['daily'][5]['weather'][0]['icon'] + ".png");
            document.querySelector('#tempFive').textContent = "Temperature: " + data['daily'][5]['temp']['day'];
            document.querySelector('#windFive').textContent = "Wind Speed: " + data['daily'][5]['wind_speed'];
            document.querySelector('#humidityFive').textContent = "Humidity: " + data['daily'][5]['humidity'];
        })  
}   

fetchButton.addEventListener('click', getApi);