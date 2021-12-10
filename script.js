let btn = document.getElementById("button");

btn.addEventListener("click", () => {

let product   = document.getElementById("product-list");
let row       = document.createElement("div");
row.className = "row";
let col1      = document.createElement("div");
col1.className = "col-sm";
col1.innerText = "left"
let col2 = document.createElement("div");
col2.className = "col-sm";
col2.innerText = "right"
row.appendChild(col1);
row.appendChild(col2);
product.appendChild(row);


} )








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





