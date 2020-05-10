const COORDS = 'coords';
const API_KEY = '41ea064a13a7a1b0ffdd5e9bf58efd3b';
const weatherContainer = document.querySelector(".js-weather");

// request, response를 보낼 수 있는데 게다가 새로고침없이 
// 계속해서 데이터를 가져올 수 있기 때문에 웹서비스에서 강력한 언어로
// 떠오름

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        if (response.ok) {
            //fetch()가 완료된 이후(데이터가 넘어온 뒤) callback function
        //console.log("getWeather then response :" + response.json());
        return response.json();
        }
    }).then(function(json) {
        //console.log("then x 2: " + JSON.stringify(json));
        console.log(json.main.temp);
        console.log(json.name);
        const temperature = json.main.temp;
        const place = json.name;

        weatherContainer.innerText = `${temperature}°C @ ${place}`;
    });
}

function handleGeoError() {
    console.log("can't get geo location.");
}

function saveCoords(coordsObj) {
    console.log("saveCoords:");
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.log("handleGeoSuccess...");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    /*
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    */
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    //console.log("geo success!" + position.coords.latitude);
    getWeather(latitude, longitude);
}

function askForCoords() {
    console.log("...ask?");
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function init() {
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

init();