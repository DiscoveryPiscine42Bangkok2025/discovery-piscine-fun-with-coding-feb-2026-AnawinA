const ftList = document.getElementById("ft_list");

function createList() {
    let item = prompt("Enter a new to-do item:")

    if (item) {
        addList(item);
    }
}

function addList(item) {
    const newItem = document.createElement("div");
    ftList.prepend(newItem);
    newItem.textContent = item;
    let randomedHex = randomColorHex();
    newItem.style.backgroundImage = `linear-gradient(to right, #f0f0f0 30%, ${randomedHex}55)`;
    newItem.addEventListener("click", () => {
        if (confirm("Do you want to delete this item?")) {
            const delItem = document.createElement("div");
            delItem.textContent = newItem.textContent;
            delItem.classList.add("todo", "deleting");
            newItem.after(delItem);
            setTimeout(() => {
                ftList.removeChild(delItem);
            }, 500);
            ftList.removeChild(newItem);
        }
    });
    newItem.addEventListener("mouseover", () => {
        newItem.classList.add('hover');
    });
    newItem.addEventListener("mouseout", () => {
        newItem.classList.remove('hover');
    });
    newItem.classList.add('todo', 'born', 'saveable');
    setTimeout(() => {
        newItem.classList.remove('born');
    }, 500);
    // console.log(getTodosList());
}

function getTodosList() {
    let todosDiv = document.querySelectorAll('div.saveable');
    let todos = Array.from(todosDiv).map((todo) => todo.textContent).reverse();
    return todos;
}

function randomColorHex() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}


window.onload = () => {
    let todosData = getCookie("todos");
    if (todosData) {
        let todoes = JSON.parse(todosData);
        todoes.forEach((todo) => {
            addList(todo);
        });
    } else {
        console.log("No todoes found in cookie.");
    }
}

window.onbeforeunload = () => {
    setCookie("todos", JSON.stringify(getTodosList()));
}
