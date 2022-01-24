const  addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

const itemId = document.getElementById("itemId").value;
const  itemQuantity = document.getElementById("itemQuantity").value;

const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if(request.readyState===4) {
//                if(request.responseText==="Ok"){
//                    alert("Message Posted");
//                }
               console.log(request.responseText);
            }
        });
        request.open("POST","http://localhost:8080/products");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({itemName: "Rock 001", itemDescription: "Abc", itemPrice:"12", itemQuantity: "4",imageUrl:"ddd" }));

})


