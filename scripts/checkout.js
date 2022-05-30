
document.getElementById("confirm").addEventListener("click",runprogram);


function runprogram(){
    var info =document.getElementById("name").value;
var number = document.getElementById("number").value
var ad = document.getElementById("address").value;
    if( info != "" && number != "" && ad != ""){
        alert("Your Order is Accepted");
        
    swap()
    }
    else{
        alert("Incomplete form")
    }
}

function swap(){
    alert("Your Order Being Prepared")
    jump();

    
}

function jump(){
    alert("Your is order is Delvering")
}
