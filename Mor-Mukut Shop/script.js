let mapDv = document.querySelector('.Map');

document.querySelector('#Map-btn').onclick = () =>{
    mapDv.classList.toggle('active');
    nevbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    nevbar.classList.remove('active');
    mapDv.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    nevbar.classList.remove('active');
    mapDv.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let nevbar = document.querySelector('.nevbar');

document.querySelector('#menu-btn').onclick = () =>{
    nevbar.classList.toggle('active');
    mapDv.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    nevbar.classList.remove('active');
    mapDv.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}






  function whatsapp(){
    var name = document.getElementById("name").value;
    var name = document.getElementById("price").value;

    var url = "http://wa.me/918766069665?text="
    +" Product Name : "+name+"%0a"
    +" Product Name : "+price+"";

    window.open(url,'blank').focus();
  }



var myVar;

function myFunction() {
myVar = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loading").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}


