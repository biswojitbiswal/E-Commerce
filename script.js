// for navbar
const bar = document.getElementById('bar-icon');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
const smallImages = document.querySelectorAll('.small-img img');
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const mainImage = document.querySelector('#prod-details .prod-look .prod-img #mainimg');
document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector('#cart-icon');

    cartIcon.addEventListener("click", function() {
        console.log("Clicked!"); // Check if click event is being triggered
        window.location.href = 'cart.html';
    });
});




// for cart icon function
// cartIcons.forEach(cartIcon => {
//     cartIcon.addEventListener("click", function(event) {
//         event.stopPropagation();
//         window.location.href = 'cart.html';

//         const parentElement = cartIcon.parentElement; // Get the parent element
//         // const product = parentElement.className; // Get the class name of the parent element
//         const prodImage = parentElement.querySelector('img').getAttribute('src'); // Query for img inside parent
//         const prodHeading = parentElement.querySelector('h5').innerText;
//         const prodPrice = parentElement.querySelector('h4').innerText;

//         const newDiv = document.createElement('div');
//         newDiv.className = 'item';
        
//         newDiv.innerHTML = `<div class="item-details">
//         <img src="${prodImage}" alt="" class="item-image">
//         <div class="item-detail">
//             <h3>${prodHeading}</h3>
//             <p>Seller : Shopy E-commerce</p>
//             <h4>${prodPrice}</h4>
//             <div class="quantity">
//                 <div class="minus quantity-btn">-</div>
//                 <div class="number quantity-btn">1</div>
//                 <div class="plus quantity-btn">+</div>
//             </div>
//         </div>
//     </div>
//     <div class="buy-remove">
//         <button class="normal item-btn">Remove</button>
//         <button class="normal item-btn">Buy Now</button>
//     </div>`;

//         const cartSection = document.querySelector('#cart-items');
//         cartSection.appendChild(newDiv);
//     })
// })




// console.log(links);
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

// ========for product link=========
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.prod');
    products.forEach(function(product) {
        product.addEventListener('click', function(event) {
            // Prevent default action (if needed)
            // event.preventDefault();
            window.location.href = 'iproduct.html';

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
        });
    });

    // Retrieve product details from sessionStorage
    const brand = sessionStorage.getItem('productBrand');
    const imgSrc = sessionStorage.getItem('productImgSrc');
    const heading = sessionStorage.getItem('productHeading');
    const price = sessionStorage.getItem('productPrice');

    // Update individual product showcase
    document.querySelector('.brand-name').innerText = brand;
    mainImage.src = imgSrc;
    document.querySelector('.small-img .first-img').src = imgSrc;
    document.querySelector('.details h4').innerText = heading;
    document.querySelector('.details h2').innerText = price;
});


// =========for product image ==========
let prevBorder = document.querySelector('.small-img img.border');
smallImages.forEach((smallImage) => {
    smallImage.addEventListener("mouseenter", function() {
        mainImage.src = this.src;
        if(prevBorder != null){
            prevBorder.classList.remove('border');
        }
       this.classList.add('border');
        prevBorder = this;
    })
})

// ==============for image backgound color ===========
let prevcolor = null;
colors.forEach(color => {
    color.addEventListener("click", function() {
        mainImage.style.backgroundColor = this.style.backgroundColor;
        if(prevcolor != null){
            prevcolor.classList.remove("color-alpha");
        }
        this.classList.add('color-alpha');
        prevcolor = this;
        smallImages.forEach(smallImage => {
            smallImage.style.borderColor = this.style.backgroundColor;
        })
    })
});

// ==========for product size===========
let prevsize = null;
sizes.forEach(size => {
    size.addEventListener("click", function() {
        if(prevsize != null){
            prevsize.classList.remove('select-size');
        }
        this.classList.add('select-size');
        prevsize = this;
    })
})

// =======for number of items=======
document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const numberDisplays = document.querySelectorAll('.number');
    let noOfItems = 1;

    // Add event listeners to each minus button
    minusButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            noOfItems = parseInt(numberDisplays[index].innerText);
            if (noOfItems > 1) {
                noOfItems--;
                numberDisplays[index].innerText = noOfItems;
            }
        });
    });

    // Add event listeners to each plus button
    plusButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            noOfItems = parseInt(numberDisplays[index].innerText);
            noOfItems++;
            numberDisplays[index].innerText = noOfItems;
        });
    });
});






