const form = document.querySelector(".js-greetingForm");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    // console.log(event);
    // event가 전달이 되면, 
    // 프로그램 되어진 대로 다른 곳으로 가고 페이지가 새로고침 되는 거임 

    event.preventDefault();
    const currentVlaue = input.value;
    paintGreeting(currentVlaue);
    saveName(currentVlaue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const cuurentUser = localStorage.getItem(USER_LS);
    if (cuurentUser === null) {
        askForName();
    } else {
        paintGreeting(cuurentUser);
    }
}

function init() {
    loadName();
}

init();