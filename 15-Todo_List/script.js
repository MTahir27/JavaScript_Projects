// Calling Elements
const alert = document.querySelector(".alert");
const todoForm = document.querySelector(".todo-form");
const todoContainer = document.querySelector(".todo-container");
const todoSection = document.querySelector(".todoSection");

const todoInput = document.querySelector(".input-list");
const submitBtn = document.querySelector('.submit-btn');
const clear = document.querySelector(".clear");

// OnSubmit Function
todoForm.onsubmit = (e) => {
    e.preventDefault();
    todoInputFunction();
}

// Check Conditions
let createButton = "False";
let todoListExist = "False";

const todoInputFunction = () => {
    const todoId = new Date().getTime().toString();
    console.log(todoId);
    const todoValue = todoInput.value;
    if (todoValue !== '') {
        // Create todo List
        const todoList = document.createElement('div');
        todoList.classList.add("todo-list");

        // TodoList ID
        const attr = document.createAttribute("data-id");
        attr.value = todoId;
        todoList.setAttributeNode(attr);

        // Create todoItem
        const todoItem = document.createElement('p');
        todoItem.classList.add("todo-item");
        todoList.appendChild(todoItem);
        todoItem.textContent = todoValue;
        console.log(todoList);
        // TodoItem Button
        const todoItemBtns = document.createElement("div");
        todoItemBtns.classList.add("btn-container");
        todoItemBtns.innerHTML = `<button class="edit-btn icon-btn">
        <img src="images/edit.png" alt="Edit Img">
    </button>
    <button class="delete-btn icon-btn">
        <img src="images/delete.png" alt="Delete Img">
    </button>`;
        todoList.appendChild(todoItemBtns);

        // Show TodoItem in TodoContainer
        todoContainer.appendChild(todoList);

        todoListExist = "True";

    } else {
        alertFunction("Please Enter Value", "danger");
    }

    // ClearButton FUnction
    clearbtnFunction();
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

// Clear Button Function
const clearbtnFunction = () => {
    // Check Todo List Exist
    if (todoListExist === "True") {
        // Run only if Clear Button Not Exist
        const clear = document.querySelector(".clear");
        if (!clear) {
            const clearBtn = document.createElement("button");
            clearBtn.classList.add("clear");
            clearBtn.textContent = "Clear all item";
            todoSection.appendChild(clearBtn);
            // console.log("CLear Exist: " + clearBtn.classList.contains("clear"));
        }
        // console.log("Check Todo List " + todoListExist);
    } else {
        // console.log("Check Todo List " + todoListExist);
    }
}