const ftList = document.getElementById("ft_list");

function addList() {
    let item = prompt("Enter a new to-do item:")
    
    if (item) {
        const newItem = document.createElement("div");
        ftList.prepend(newItem);
        newItem.textContent = item;
        newItem.addEventListener("click", () => {
            if (confirm("Do you want to delete this item?")) {
                ftList.removeChild(newItem);
            }
        }); 
        newItem.addEventListener("mouseover", () => {
            newItem.classList.add('hover');
        });
        newItem.addEventListener("mouseout", () => {
            newItem.classList.remove('hover');
        });
        newItem.classList.add('born');
        setTimeout(() => {
            newItem.classList.remove('born');
        }, 1000);
    }
}