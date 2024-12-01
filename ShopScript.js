const orderButtons = document.querySelectorAll('.btn-primary[data-bs-toggle="modal"]');

orderButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.getAttribute('data-product-name');
        const productPrice = event.target.getAttribute('data-product-price');

        const modalTitle = document.querySelector('#orderModalLabel');
        const productNameElement = document.querySelector('#product-name');
        const productPriceElement = document.querySelector('#product-price');
        
        modalTitle.innerText = `Order ${productName}`;
        productNameElement.innerText = productName;
        productPriceElement.innerText = productPrice;
    });
});

const placeOrderButton = document.querySelector('.modal-footer .btn-primary');

placeOrderButton.addEventListener('click', () => {

    const quantity = document.querySelector('#quantity').value;
    const productName = document.querySelector('#product-name').innerText;
    const productPrice = document.querySelector('#product-price').innerText;

    alert(`Order placed lods, eto order mo --> ${quantity} of ${productName} at ${productPrice} each.`);
});
