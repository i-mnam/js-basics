const body = document.querySelector("body");
const IMG_NUMBER = 4;

const PRE_NUMBER = "preNumber";

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    //body.appendChild(image);
    image.classList.add("bgImage");
    body.appendChild(image);
    localStorage.setItem(PRE_NUMBER, imgNumber);
}

function getRandom() {
    let number = Math.ceil(Math.random() * 10) % IMG_NUMBER + 1;
    const preNumber = parseInt(localStorage.getItem(PRE_NUMBER));

    if(number === preNumber) {
        number = getRandom();
    }
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();