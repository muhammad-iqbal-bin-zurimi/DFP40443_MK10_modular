document.addEventListener("DOMContentLoaded", function(){

let inputs = document.querySelectorAll("input[type=number]");
let totalBox = document.getElementById("total");

function kiraTotal(){

let total = 0;

inputs.forEach(function(input){

let qty = parseInt(input.value);

if(!isNaN(qty) && qty > 0){

let harga = parseFloat(input.dataset.harga);
total += qty * harga;

}

});

if(totalBox){
totalBox.innerHTML = "RM " + total.toFixed(2);
}

}

inputs.forEach(function(input){
input.addEventListener("input", kiraTotal);
});

});