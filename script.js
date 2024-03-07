// for navbar
const bar = document.getElementById('bar-icon');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
const cartIcon = document.querySelector('#cart-icon');



if(bar){
    bar.addEventListener("click", () => {
        // alert("clicked");
        navbar.classList.add('open-navbar');
    })
}
if(close){
    close.addEventListener("click", () => {
        navbar.classList.remove('open-navbar');
    })
}



// for cart icon functionality
cartIcon.addEventListener("click", () => {
    window.location.href = "cart.html";
})



// ========for product link=========
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.prod');
    products.forEach(function(product) {
        product.addEventListener('click', function(event) {
            // Prevent default action (if needed)
            // event.preventDefault();
            

            // Get product details
            const brand = product.querySelector('.brand').textContent;
            const imgSrc = product.querySelector('img').getAttribute('src');
            const heading = product.querySelector('h5').textContent;
            const price = product.querySelector('h4').textContent;

            // Store product details in sessionStorage to pass to 'iproduct.html'
            sessionStorage.setItem('productBrand', brand);
            sessionStorage.setItem('productImgSrc', imgSrc);
            sessionStorage.setItem('productHeading', heading);
            sessionStorage.setItem('productPrice', price);

            window.location.href = 'iproduct.html';
        });
    }); 
   
});








