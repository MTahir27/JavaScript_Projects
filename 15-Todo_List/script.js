// Calling Elements
const alert = document.querySelector(".alert");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".input-list");
const submitBtn = document.querySelector('.submit-btn');
const clear = document.querySelector(".clear");

// OnSubmit Function
todoForm.onsubmit = (e) => {
    e.preventDefault();
    todoInputFunction();
}
const todoInputFunction = () => {
    const todoValue = todoInput.value;
    if (todoValue !== '') {
        const todoList = document.createElement('div');
        todoList.classList.add("todo-list");
        const todoItem = document.createElement('p');
        todoItem.classList.add("todo-item");
        todoList.appendChild(todoItem);
        todoItem.textContent = todoValue;
        console.log(todoList);
    } else {
        // alert.innerText = "Please Enter value";
        alertFunction("Please Enter Value", "danger");
    }
}

// Alert Function
const alertFunction = (message, type) => {
    alert.innerText = message;
    alert.classList.add(`alert-${type}`);
    // Remove Alert After 1s
    setTimeout(
        () => {
            alert.textContent = "";
            alert.classList.remove(`alert-${type}`);
        }, 1000
    );
}