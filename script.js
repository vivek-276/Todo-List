// Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");

// we will call this function while adding, deleting and checking-uncheking the task

function allTask() {
    let tasks = document.querySelectorAll(".pending");

    // if tasks length is 0 then pending num text content will be no, if not then pending num value will be tasks length
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}
// console.log(inputField,todoLists,pendingNum,clearButton)

// Add task while we put value in text area and press enter

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //trim fuction removes space of front and back of the inputed value.
    // console.log(inputVal);

    // if enter button is clicke d and inputed value length is greater than 0.
    if (e.key === "Enter" && inputVal.length > 0) {
        // console.log("valid")
        let liTag = `<li class="list pending"  onclick="handleStatus(this)">
                <input type="checkbox" />
                <span class="task">${inputVal}.</span>
                <i class="uil uil-trash" onclick="deleteTask(this)"></i>
            </li>`;
        todoLists.insertAdjacentHTML("beforeend", liTag);     //inserting li tag inside the todolist div
        inputField.value = "";      // removing value from input field
        allTask();
    }
});

// checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
    const checkbox = e.querySelector("input");  // getting checkbox
    // console.log(checkbox)
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTask();
}

// deleting task while we click on the delete icon.
function deleteTask(e) {
    e.parentElement.remove();     // Getting parent element and remove it
    allTask();
    // console.log(e.parentElement);
}

// deleting all the tasks while we click on the clear button.
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTask();
});