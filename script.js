function addToCart(index) {
    document.getElementById(`${listing[index].name}`).innerHTML =
        `<div class="cart_spacing">
            <div class="shopping_cart">
                <button onclick="decrease(${index})"><img src="./assets/img/minus-1270000_640.png" alt="Minus_img"></button>
                <div id="${listing[index].name}_amount"></div>
                <button onclick="increase(${index})"><img src="./assets/img/plus-1270001_640.png" alt="Plus_img"></button>
                <div id="${listing[index].name}_name"></div>
            </div>
                <div id="${listing[index].name}_price"></div>
        </div>`
    increase(index);
}

function increase(index) {

    document.getElementById('shopping_cart').innerHTML = document.getElementById('shopping_cart').innerHTML.replace('Added items will be displayed here!', '');
    document.getElementById('total').classList.remove("hidden");

    listing[index].amount++;
    document.getElementById(`${listing[index].name}`).classList.remove("hidden");
    refresh_cart(index);
}

function decrease(index) {
    listing[index].amount--;
    listing[index].amount == 0 ?
    document.getElementById(`${listing[index].name}`).classList.add("hidden") : null;
    refresh_cart(index);
}

function refresh_cart(index) {
    document.getElementById(`${listing[index].name}_amount`).innerHTML = listing[index].amount + "x";
    document.getElementById(`${listing[index].name}_name`).innerHTML = listing[index].name;
    document.getElementById(`${listing[index].name}_price`).innerHTML = (listing[index].amount * listing[index].price).toFixed(2) + " €";

    if (listing.filter(obj => (obj["amount"] !== 0)).length == 0) {
        document.getElementById('shopping_cart').innerHTML = 'Added items will be displayed here!' + document.getElementById('shopping_cart').innerHTML;
        document.getElementById('total').classList.add("hidden");
        document.getElementById('total').innerHTML = "";
    }
    
    let ordered = listing.filter(obj => (obj["amount"] !== 0));
    let total_cost = 0;
    for (let index = 0; index < ordered.length; index++) {
        total_cost += ordered[index].amount * ordered[index].price;
        document.getElementById('total').innerHTML = "Gesamtkosten: " + total_cost.toFixed(2) + " €";
        
    }
}

function display_showcase(index) {
    document.getElementById('showcase').innerHTML =
    `<img src="./assets/img/${listing[index].image}"></img>`;
}