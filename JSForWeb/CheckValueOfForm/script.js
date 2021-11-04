(function() {
    "use strict";
    var btnsubmit = document.getElementById('btn-estimate');
    var form = document.getElementById('cart-hplus');
    var selection = document.getElementById('s-state');
    document.addEventListener("DOMContentLoaded", function() {
        form.addEventListener('submit', submitform);
        btnsubmit.disabled = true;
    })

    function submitform(element) {
        element.preventDefault();
        if (selection.value === '') {
            alert("لطقا مقدار سلکت را وارد فرمایید");
        }
        var txtqbball = document.getElementById('txt-q-bball').value,
            txtqjersey = document.getElementById('txt-q-jersey').value,
            txtqpower = document.getElementById('txt-q-power').value,
            sstate = selection.value;
        var shippingmethode = document.querySelector('[name=r_method]:checked').value;
        var pricesum = (txtqbball * 90) + (txtqjersey * 25) + (txtqpower * 30);
        if (shippingmethode === 'usps')
            pricesum += 2;
        if (shippingmethode === 'ups')
            pricesum += 3;
        if (sstate === 'CA')
            pricesum = (pricesum * 92.5) / 100;
        else {
            pricesum = (pricesum * 99) / 100;
        }
        console.log(pricesum);
        var sumtxt = document.getElementById('txt-estimate');
        sumtxt.value = '$' + pricesum;

    }
    selection.addEventListener('change', function() {
        if (selection.value === '') {
            btnsubmit.disabled = true;
        } else {
            btnsubmit.disabled = false;
        }
    })
})();