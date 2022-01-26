const  addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

const itemId1 = document.getElementById("itemId").value;
const  itemQuantity1 = document.getElementById("itemQuantity").value;


const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if(request.readyState===4) {
               console.log(request.responseText);
            }
        });
        request.open('PUT',"http://localhost:8080/products/"+itemId1);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({itemId: itemId1, itemQuantity: itemQuantity1}));
        //this is comment

})


