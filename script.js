function addToCart(index) {
    document.getElementById(`${listing[index].name}`).innerHTML =
        `<div class="shopping_cart">
            <button onclick="decrease(${index})">-</button>
            <button onclick="increase(${index})">+</button>
            <div id="${listing[index].name}_ordered"></div>
        </div>`
    increase(index);
}

function increase(index) {
    listing[index].amount++;
    document.getElementById(`${listing[index].name}`).classList.remove("hidden");
    refresh_cart(index);
}

function decrease(index) {
    listing[index].amount--;
    listing[index].amount == 0 ?
    document.getElementById(`${listing[index].name}`).classList.add("hidden") : console.log(`${listing[index].name}: Amount reduced`);
    refresh_cart(index);
}

function refresh_cart(index) {
    document.getElementById(`${listing[index].name}_ordered`).innerHTML =
    listing[index].amount + "x " + listing[index].name + " " + listing[index].amount * listing[index].price.toFixed(2) + " €";
}