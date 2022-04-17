function CalculatePrice() {
    var quantity = document.getElementById("quantity");
    if (quantity.value < 1 || quantity.value > 10) {
        quantity.setCustomValidity('Please input quantity in range from 1 to 10.');
        document.getElementById("total-price").innerHTML = 0;
    }
    else {
        document.getElementById("quantity").innerHTML = quantity.value;
        var price = document.getElementById("price").value;
        var totalPrice = parseFloat(price) * parseFloat(quantity.value);
        document.getElementById("total-price").innerHTML = totalPrice;
        quantity.setCustomValidity('');
    }
}

CalculatePrice();

function Checkout(){

}