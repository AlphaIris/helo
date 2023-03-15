// document.getElementsByClassName("add").onclick = function() {myFunction()};

// function myFunction() {
//   const a =document.getElementById("cartnotification");
//   a.value="Added To Cart";
// }



















let placeholder = document.getElementById("pppp").textContent;
var total = parseInt(placeholder);

// var total = 377;


function addedToCart() {
    const a = document.getElementById("cartnotification");
    a.innerHTML = "Added To Cart";
    // localStorage.setItem("")
}

function del(tag) {
    const a = document.getElementById(tag);
    a.innerHTML = " ";
    const docc = document.getElementById("cartnotification");
    docc.innerHTML = "Deleted";

}
function price(tag) {
    let matchh = tag.match(/\d+/g);
    var upd = matchh[0];
    a = document.getElementById("p" + upd);
    data = a.innerText;
    sum = parseInt(data);
    console.log(sum);
    console.log(total);
    total = total - sum;
    console.log(total);
    e = document.getElementById("pppp");
    e.innerHTML = total;
}
function deleted(tag) {
    price(tag);
    del(tag);
}