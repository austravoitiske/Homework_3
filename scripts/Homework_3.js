window.addEventListener('DOMContentLoaded', main);

function main(){
    console.log("I should run when content is loaded and ready to go!");
    addListeners();
    console.log("Good to go now!");
}
const maxVal = document.getElementById("max-value");
const addManyBtn = document.getElementById("add-many");
const addBtn = document.getElementById("add-el");
const elContainer = document.getElementById("app-cont");
const clearAll = document.getElementById("delete-all")
const allNumInputs = document.getElementsByClassName("my-numbers");

let globalCount = 0;

function addListeners(){
    console.log("Adding Listeners");
    clearAll.onclick = onClearAllClick;
    addManyBtn.onclick = onAddManyBtnClick;
}
function onAddManyBtnClick(){
    const newElCount = parseInt(maxVal.value);
    console.log("Adding", newElCount, "elements at once");
    for (let i=1; i<=newElCount; i++){
        if(i % 3 === 0 && i % 5 === 0){
            className = "fizz-buzz";
            addNewElement("div", elContainer, "FizzBuzz "+i, "my-id "+i, className);
        }
        else if (i % 3 === 0 && i % 5 !== 0){
            className = "fizz";
            addNewElement("div", elContainer, "Fizz "+i, "my-id "+i, className);
        }
        else if (i % 5 === 0 && i % 3 !== 0){
            className = "buzz";
            addNewElement("div", elContainer, "Buzz "+i, "my-id "+i, className);
        }  
        else if (i % 3 !== 0 && i % 5 !== 0){ 
            className = "default";
            addNewElement("div", elContainer, +i, "my-id "+i, className);
        }
    }
globalCount = globalCount + newElCount;
}
function addNewElement(tag, parent, text, id, defClass = "new-el") {
    const newEl = document.createElement(tag);
    newEl.id = id;
    newEl.classList.add(defClass)
    newEl.innerText = text;
    parent.appendChild(newEl);
}
function onClearAllClick(){
    console.log("Delete Button was created!");
    removeAllChildren(elContainer);
    globalCount = 0;
}
function removeAllChildren(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
