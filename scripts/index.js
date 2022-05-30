// Add the coffee to local storage with key "coffee"



 

async function showcoffe(){
    let url  = `https://masai-mock-api.herokuapp.com/coffee/menu`;
    try {
      let response = await fetch(url);
      let data = await response.json();
  console.log("data",data.menu.data);
  var Info= data.menu.data;
  
  appenddata(Info)
     
  
    }
    catch(error){
      console.log(error);
  
    }
  }
  
  showcoffe();
  
  
  function appenddata(data){
  
   
  
    data.forEach(function(elem){
      // console.log(elem)
      var div = document.createElement("div");
      div.setAttribute("id","div")
      var img = document.createElement("img");
      
      var type = document.createElement("p");
      type.setAttribute("id","type");
      
      var price = document.createElement("p");
      price.setAttribute("id","price")
      var btn = document.createElement("button");
      btn.setAttribute("id","add_to_bucket")
      btn.addEventListener("click",function(){
          addproduct(elem);

      })
  
  
  
      //work 
      img.src = elem.image;
      img.setAttribute("id","img")
      type.innerText = elem.title+" "+"Coffee";
  
      price.innerText = elem.price+"$";
      btn.innerText = "Add To Bucket";
  
      div.append(img,type,price,btn);
      var appned1 = document.getElementById("menu");
      appned1.append(div);
  
  
    })


var count = 0;

    function addproduct(elem){
        count++;
var num = document.getElementById("coffee_count").innerText = count;

        var info = JSON.parse(localStorage.getItem("coffee")) || [];

        info.push(elem);
        localStorage.setItem("coffee",JSON.stringify(info));

    }
  }
  
  
  