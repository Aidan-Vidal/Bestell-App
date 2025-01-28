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
        
        document.getElementById(`${listing[index].category}`).innerHTML +=
        `<div>
          <div class="food_item">
            <span class="name"></span>
            <span class="description"></span>
            <span class="price"></span>
          </div>
        </div>`

        // (3)
        document.getElementsByClassName('name')[index].innerHTML += listing[index].name;
        document.getElementsByClassName('description')[index].innerHTML += listing[index].description;
        document.getElementsByClassName('price')[index].innerHTML += listing[index].price.toFixed(2)+" €";
    }
}