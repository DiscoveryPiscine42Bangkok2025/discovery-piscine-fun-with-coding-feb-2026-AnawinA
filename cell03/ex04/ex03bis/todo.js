$(() => { //window load

const $ftList = $("#ft_list");
$("#newBtn").click(() => {
    let item = prompt("Enter a new to-do item:")
    if (item) addList(item);
})
function addList(item) {
    const $newItem = $(document.createElement("div"));
    $ftList.prepend($newItem);
    let randomedHex = randomColorHex();
    $newItem.text(item)
        .css("backgroundImage", `linear-gradient(to right, #f0f0f0 30%, ${randomedHex}55)`)
        .addClass("todo born saveable")
        .on({
            click: () => {
                if (confirm("Do you want to delete this item?")) {
                    const $delItem = $(document.createElement("div"));
                    $delItem.text(item)
                        .addClass("todo deleting");
                    $newItem.after($delItem);
                    setTimeout(() => {
                        $delItem.remove();
                    }, 500);
                    $newItem.remove();
                }
            },
            mouseover: () => $newItem.addClass('hover'),
            mouseout: () => $newItem.removeClass('hover')
        });
    setTimeout(() => {
        $newItem.removeClass('born');
    }, 500);
}

function getTodosList() {
    return todos = $("div.saveable")
        .map((_, el) => el.textContent)
        .get().reverse();
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


}) //end window load


