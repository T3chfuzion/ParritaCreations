// scripts.js

$(document).ready(function() {
    $.getJSON('products.json', function(data) {
        let products = '';
        $.each(data, function(key, value) {
            products += `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${value.image}" class="card-img-top" alt="${value.name}">
                        <div class="card-body">
                            <h5 class="card-title">${value.name}</h5>
                            <p class="card-text">$${value.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#product-list').html(products);
    });
});
