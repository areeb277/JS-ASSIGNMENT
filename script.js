// JAVASCRIPT //

let input = document.getElementById("user-value");
let cart = document.getElementById("cart");
let button = document.getElementById("task-btn");

button.addEventListener("click" , function () {

    let items = document.createElement("li");
    items.textContent = input.value;
    cart.appendChild(items);

    items.style.fontSize = "1.2rem"

});