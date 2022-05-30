// On clicking remove button the item should be removed from DOM as well as localstorage.


var info = JSON.parse(localStorage.getItem("coffee")) || [];



displayData(info);

function displayData(info){
    var count  = 0;
    info.forEach(function(elem,index){

        // console.log(elem)
var total = document.createElement("p");
total = null;




        var div = document.createElement("div");
        div.setAttribute("id","div")
        var img = document.createElement("img");
        
        var type = document.createElement("p");
        type.setAttribute("id","type");
        
        var price = document.createElement("p");
        price.setAttribute("id","price")
        var btn = document.createElement("button");
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function(){
            deleteItem(elem,index)
  
        })


        img.src = elem.image;
        img.setAttribute("id","img")
        type.innerText = elem.title+" "+"Coffee";
    
        price.innerText = elem.price+"$";
count = count + elem.price;
console.log(count)



        btn.innerText = "Remove";
    
        div.append(img,type,price,btn);
        var appned1 = document.getElementById("bucket");
        appned1.append(div);
    

    
        
    })
    document.getElementById("total_amount").append("Total Price:-",count)





}


  function deleteItem(elem,index){
info.splice(index,1);
localStorage.setItem("coffee",JSON.stringify(info));
window.location.reload();


  }


