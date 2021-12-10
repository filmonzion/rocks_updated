
// var prodcutList =  { productOne:{name:"Rocks from local beach", price : "$1000"}} 
// localStorage.setItem("products", JSON.stringify(prodcutList));
// prodcutList = JSON.parse(localStorage.getItem("products"))
  
let thousandButton = document.getElementById("thousandButton");
if(thousandButton) {
thousandButton.addEventListener('click',  () => {
        var prodcutList =  {photo: '<img src="./images/small-size-rock.jpg  class="product-img">', name:"Rocks from local beach", price : "$1000"};
        localStorage.setItem("products", JSON.stringify(prodcutList));
        window.location.href =  "./prodcut.html";     
} )
}

let twoThousandButton = document.getElementById("twoThousandButton");
if(twoThousandButton) {
twoThousandButton.addEventListener('click',  () => {
        var prodcutList =  {photo: '<img src="./images/white-rock.jpg"  class="product-img">', name:"Shiny Rocks", price : "$2000"};
        localStorage.setItem("products", JSON.stringify(prodcutList));
        window.location.href =  "./prodcut.html";     
} )
}

   


let aboutButton = document.getElementById("about-button");
if(aboutButton) {
aboutButton.addEventListener('click', () => {
     window.location.href = "./home.html";
 } )
}

if(document.URL.indexOf("prodcut.html")) {
    let prodcutList = JSON.parse(localStorage.getItem("products"))
    document.getElementById("productImg").innerHTML = prodcutList.photo;
    document.getElementById("productTitle").innerText = prodcutList.name;
    document.getElementById("productPrice").innerText = prodcutList.price;

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
















