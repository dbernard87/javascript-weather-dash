let inputSearch = document.querySelector('.locationSearch');
let repoList = document.querySelector('ul');
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
            var listItem = document.createElement('button');
            listItem.classList.add("previousBtn");
            listItem.textContent = inputSearch.value;
            repoList.appendChild(listItem);
    });
}

fetchButton.addEventListener('click', getApi);