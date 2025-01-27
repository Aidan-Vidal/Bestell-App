function init() {}

function get_list() {
    for (let index = 0; index < listing.length; index++) {
        const foodObj = listing[index];

        document.getElementById('food_listing').innerHTML += 

        `<div class="food_item" id="food${index}">
            <h2 id="name${index}">${foodObj.name}</h2>
            <span id="description${index}">${foodObj.description}</span>
            <span id="price${index}"><b>${foodObj.price.toFixed(2)} €</b></span>
        </div>`;
    }
}