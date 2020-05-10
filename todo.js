const toDoForm = document.querySelector(".js-toDoForm");
// const input = toDoForm.querySelector("input");
// Uncaught SyntaxError: Identifier 'input' has already been declared
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector(".js-toDoUl");

const TODO_LS = "toDos";

//const toDosArr = [];
let toDosArr = [];
let lastId = 0;

function deleteToDo(event) {
    //console.log(event.target.parentNode.id);
    const btn = event.target;
    const li = btn.parentNode;
    const id = parseInt(li.id);

    toDoUl.removeChild(li);

    const cleanToDs = toDosArr.filter(function(ele) {
        return ele.id !== id;
    });
    console.log("clean:" + cleanToDs);

    toDosArr = cleanToDs;
    //TypeError: Assignment to constant variable.

    saveToDos();
    
}

function saveToDos() {
    // localStorage.setItem(TODO_LS, toDosArr);
    // localStorage 에는 js의 데이타를 저장 할 수 없음 
    // 온니 str만 가능
    // [object Object], [object Object],,
    localStorage.setItem(TODO_LS, JSON.stringify(toDosArr));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("a");
    const span = document.createElement("span");
    //const newId = toDosArr.length + 1;
    lastId = lastId + 1;
    delBtn.href = "#";
    delBtn.classList.add("close-icon");
    //delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    span.appendChild(delBtn);
    li.appendChild(span);
    //li.appendChild(delBtn);
    li.id = lastId; //!!!

    toDoUl.appendChild(li);

    const toDosObj = {
        id: lastId,
        text: text
    };

    toDosArr.push(toDosObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        // nothing? // js object notation
        // JSON.parse
        const parsedToDos = JSON.parse(loadedToDos);

        /*
        parsedToDos.forEach(function(ele){
            if (ele.id > lastId) {
                lastId = ele.id;
                console.log("lastId 갱신" + lastId);
            }
        });
        */

        parsedToDos.forEach(function(ele, idx) {
            //console.log("["+idx+"] " + ele.text);
            paintToDo(ele.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    
}

init();