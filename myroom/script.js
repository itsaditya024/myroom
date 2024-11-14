// js for search (type)
function searchlocation() {
    const input = document.getElementById('location').value.toLowerCase();
    const products = document.querySelectorAll('.content-box');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}

// js for search (type)
function searchType() {
    const input = document.getElementById('type').value.toLowerCase();
    const products = document.querySelectorAll('.content-box');

    products.forEach(product => {
        const productName = product.getAttribute('data-value').toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}

// js for search (price)
function searchPrice() {
    const input = document.getElementById('price').value.toLowerCase();
    const products = document.querySelectorAll('.content-box');

    products.forEach(product => {
        const productName = product.getAttribute('price').toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}