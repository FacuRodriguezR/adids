// CART
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// open cart
cartIcon.addEventListener("click", ()=>{
    cart.classList.add('active');
});

// close cart
closeCart.addEventListener("click", ()=>{
    cart.classList.remove('active');
});



// cart working JS

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
};

// Making function

function ready (){
    // remove items from cart
var removeCartButtons = document.getElementsByClassName('cart-remove');

console.log(removeCartButtons);

for( var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
}
    // quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
    // add cart
    var addCart = document.getElementsByClassName('add-cart');
    for(var i = 0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("clicl", addCartClicked);
    }
}

// remove items from car

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
// quantity changes
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}
// add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    console.log(title);
}
    // update total

function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for( var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        // si el precio contiene centavos
        total = Math.round(total*100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }

}