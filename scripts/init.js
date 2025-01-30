// (1)Firstly, getting a list of all categories, skipping doubles.
// (2) Then, creating divs for all food items.
// (3) Lastly, filling in the space.
function init() {

    // (1)
    let category = [];
    for (let index = 0; index < listing.length; index++) {
        const new_category = listing[index].category;
        
        if (category.includes(new_category) !== true) {
            category.push(listing[index].category);
            document.getElementById('food_section').innerHTML +=
                `<div id=${new_category}>
                    <h2 id=${new_category}>${new_category}</h2>
                </div>`
        } else {
            console.log(`Category ${new_category} already exists!`)
        }       
    }

    // (2)
    for (let index = 0; index < listing.length; index++) {
        
        // Food Section
        document.getElementById(`${listing[index].category}`).innerHTML +=

        `<div class="space_between">
            <div class="food_item">
                <span class="image" onclick="display_showcase(${index})"></span>
                <div class="food_info">
                    <span class="name"></span>
                    <span class="description"></span>
                    <span class="price"></span>
                </div>
            </div>
            <img onclick="addToCart(${index})" src="./assets/img/plus-1270001_640.png" alt="Plus_img">
        </div>`

        // Shopping-cart Section
        document.getElementById('shopping_cart').innerHTML +=
        `<div class="hidden" id="${listing[index].name}">${listing[index].name}</div>`

        // (3)
        document.getElementsByClassName('image')[index].innerHTML = `<img src="./assets/img/${listing[index].image}">`;
        document.getElementsByClassName('name')[index].innerHTML = listing[index].name;
        document.getElementsByClassName('description')[index].innerHTML = listing[index].description;
        document.getElementsByClassName('price')[index].innerHTML = `<br><b>${listing[index].price.toFixed(2)} €</b></br>`;
    }
}