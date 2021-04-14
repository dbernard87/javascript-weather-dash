let inputSearch = document.querySelector('.locationSearch');
let repoList = document.querySelector('ul');
let currentName = document.querySelector('#name');
let currentTemp = document.querySelector('#temp');
let currentWind = document.querySelector('#wind');
let currentHumidity = document.querySelector('#humidity');
let currentUv = document.querySelector('#uv');
let fetchButton = document.querySelector('.searchButton');

function getApi() {
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputSearch.value + "&appid=0a4b3b2dc3abb0dca1990864d02586cd";
    console.log(requestUrl);
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);
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
            console.log(data);
            currentUv.textContent = data['current']['uvi'];
        })  
}   

fetchButton.addEventListener('click', getApi);