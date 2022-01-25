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
        request.open('PUT',`http:\\localhost:8080\products\${itemId}`);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({itemId: itemId, itemQuantity: itemQuantity}));

})


