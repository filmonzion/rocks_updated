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
        request.open("GET","http://localhost:8080/product-form.html");
//        request.setRequestHeader("Content-Type", "application/json");
        request.send(null);

})


