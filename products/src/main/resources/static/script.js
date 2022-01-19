
// var productList =  { productOne:{name:"Rocks from local beach", price : "$1000"}}
// localStorage.setItem("products", JSON.stringify(productList));
// productList = JSON.parse(localStorage.getItem("products"))
  
let thousandButton = document.getElementById("thousandButton");
if(thousandButton) {
thousandButton.addEventListener('click',  () => {
        var productList =  {photo: '<img src="./images/html-main-bg.jpg"  class="product-img">',
                            name:"Sea pebbles floor stone flooring",
                            productDescription: "This river rocks comes in a variety of natural colors and patterns. Add an extra beauty in your outdoors: walkways, driveways, water features, ponds, water gardens, exposed aggregate flooring or walls and around swimming pools. Great accent for crafts: aquariums, rock gardens, cactus pot, terrarium, bamboo plants and bonsai trees. Perfect for home decor projects: floral arrangements, centerpieces, vases, bowls, apothecary jars, wedding buffet, display canisters, pillar candle in hurricane glass. Decorative stone pebbles add beauty and protect your yard patio and lawn by keeping down weed growth. The beauty of natural stone is great for enhancing your landscape around trees, shrubs, flowerbeds, ponds and foundations. Use these pebbles for landscaping around trees, potted plants decks driveways or yard.",
                            price : "119.99"};
        localStorage.setItem("products", JSON.stringify(productList));
        window.location.href =  "./product.html";
} )
}

let twoThousandButton = document.getElementById("twoThousandButton");
if(twoThousandButton) {
twoThousandButton.addEventListener('click',  () => {
        var productList =  {photo: '<img src="./images/white-rock.jpg"  class="product-img">',
                            name:"Ocean Mosaics Pebble Stone Round Mixed Tile",
                            productDescription: "Pebble Stone Round Mixed Brown Tile Natural pebble stone brings an organic ambience to any space and soothes all the worries away. This pebble stone tile has such character with many blends of earthly colors. You will truly feel a little of nature within your environment when choosing this tile for shower or pool area.",
                            price : "$149.99"};
        localStorage.setItem("products", JSON.stringify(productList));
        window.location.href =  "./product.html";
} )
}


let threeThousandButton = document.getElementById("threeThousandButton");
if(threeThousandButton) {
threeThousandButton.addEventListener('click',  () => {
        var productList =  {photo: '<img src="./images/random_size_pebble.jpg"  class="product-img">',
                            name:"Random Sized Natural Stone Pebble",
                            productDescription: "These all-natural pebble tiles are the perfect choice for bathroom tiles, kitchen tiles, and floor tiles. The tiles will add a sense of beauty and elegance to any indoor or outdoor location. The tumbled finish in these tiles provides not only vivid colors but also a sense of dimension and texture to your floor or tub surface. Each square tile features an interlocking design for easy installation. These tiles make a great addition to patios or use them to form an attractive walking path at the poolside.",
                            price : "$89.99"};
        localStorage.setItem("products", JSON.stringify(productList));
        window.location.href =  "./product.html";
} )
}

let fourThousandButton = document.getElementById("fourThousandButton");
if(fourThousandButton) {
fourThousandButton.addEventListener('click',  () => {
        var productList =  {photo: '<img src="./images/shiny_nature.jpg"  class="product-img">',
                           name:"Natural wash pebble stone",
                           productDescription: "Natural wash Pebble features natural Indonesian stone - Matching shades and colors are picked for these 12 inch x 12 inch tiles which interlock to create a seamless surface - Only the best looking pebbles are chosen and then sliced on the back to create an even surface for a superior finish and easy installation - Featuring versatile design that can be installed on walls or floors, both inside and outside.",
                           price : "$129.99"};
        localStorage.setItem("products", JSON.stringify(productList));
        window.location.href =  "./product.html";
} )
}

let aboutButton = document.getElementById("about-button");
if(aboutButton) {
aboutButton.addEventListener('click', () => {
     window.location.href = "./home.html";
 } )
}

if(document.URL.indexOf("product.html")) {
    let productList = JSON.parse(localStorage.getItem("products"))
    document.getElementById("productImg").innerHTML = productList.photo;
    document.getElementById("productTitle").innerText = productList.name;
    document.getElementById("productPrice").innerText = productList.price;
    document.getElementById("productDescription").innerText = productList.productDescription;

}


// let btn = document.getElementById("product-button");

// btn.addEventListener("click", () => {

// let product   = document.getElementById("product-list");
// let row       = document.createElement("div");
// row.className = "row";
// let col1      = document.createElement("div");
// col1.className = "col-sm";
// col1.innerText = "left"
// let col2 = document.createElement("div");
// col2.className = "col-sm";
// col2.innerText = "right"
// row.appendChild(col1);
// row.appendChild(col2);
// product.appendChild(row);


// } )
















