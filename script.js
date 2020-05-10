const title = document.querySelector('#title');

//js는 이벤트를 처리하기 위해 만들어짐.
//js는 이벤트를 받기위해 기다리고 있음

function handleResize(event){ // handleResize(){ << 이것도 됨!
  console.log("resize.");
  //console.log(event);
}
function handleOn(event){
  console.log("came on");
}
function handleOff(event){
  console.log("came off");
}
// 1)함수를 내가 필요한 시점에서 호출한다.
window.addEventListener("resize", handleResize);
window.addEventListener("online", handleOn);
window.addEventListener("offline", handleOff);
if(navigator.onLine){console.log("navi.online")}
else {console.log("navi offline")}
if(window.navigator.onLine) { console.log("online..")}
window.ononline = (event) => { console.log("fjfjfjf")}

window.addEventListener('online', function(){ console.log("ghg")});

// 2)함수를 당장 호출한다.
//window.addEventListener("resize", handleResize());

// js는 event를 다루는 함수를 만들때 마다 자동적으로 이벤트를 함수 객체에 붙인다 - event를 사용한다.

function handleClick_bck() {
  title.style.color = 'blue';
}
//title.addEventListener('click', handleClick);

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "red";

function handleClick() {
  const currentColor = title.style.color;
  console.log("??!!" + currentColor+"//"+(currentColor === BASE_COLOR));
  if (currentColor == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
  }

function handleOnline() {
  console.log("???????"+ event);
  console.log("online.");
}

function handleOffline() {
  console.log("offline.");
}

function init() {
  console.log("??");
  title.style.color = BASE_COLOR;
  title.addEventListener('click', handleClick);
  
  //window.addEventListener('online', handleOnline);
  //window.addEventListener('offline', handleOffline);
}

init();


