
function updatePrice() {
    let price = 0;

    const checkboxes = document.getElementsByClassName('item');
    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) price += parseInt(checkboxes[i].value);
    }
    document.getElementById('price').innerText = 'Your order total is: $' + price;
}