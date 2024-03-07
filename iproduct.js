const smallImages = document.querySelectorAll(".small-img img");
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const mainImage = document.querySelector("#mainimg")



document.addEventListener("DOMContentLoaded", function() {
    // Retrieve product details from sessionStorage
    const brand = sessionStorage.getItem("productBrand");
    const imgSrc = sessionStorage.getItem("productImgSrc");
    const heading = sessionStorage.getItem("productHeading");
    const price = sessionStorage.getItem("productPrice");

    // Update individual product showcase
    document.querySelector(".brand-name").innerText = brand;
    document.querySelector("#mainimg").src = imgSrc;
    document.querySelector(".small-img .first-img").src = imgSrc;
    document.querySelector(".details h4").innerText = heading;
    document.querySelector(".details h2").innerText = price;

});



// =========for product image ==========
let prevBorder = document.querySelector(".small-img img.border");
smallImages.forEach((smallImage) => {
  smallImage.addEventListener("mouseenter", function () {
    mainImage.src = this.src;
    if (prevBorder != null) {
      prevBorder.classList.remove("border");
    }
    this.classList.add("border");
    prevBorder = this;
  });
});

// ==============for image backgound color ===========
let prevcolor = null;
colors.forEach((color) => {
  color.addEventListener("click", function () {
    mainImage.style.backgroundColor = this.style.backgroundColor;
    if (prevcolor != null) {
      prevcolor.classList.remove("color-alpha");
    }
    this.classList.add("color-alpha");
    prevcolor = this;
    smallImages.forEach((smallImage) => {
      smallImage.style.borderColor = this.style.backgroundColor;
    });
  });
});

// ==========for product size===========
let prevsize = null;
sizes.forEach((size) => {
  size.addEventListener("click", function () {
    if (prevsize != null) {
      prevsize.classList.remove("select-size");
    }
    this.classList.add("select-size");
    prevsize = this;
  });
});

// =======for number of items=======
document.addEventListener("DOMContentLoaded", function () {
  const minusButtons = document.querySelectorAll(".minus");
  const plusButtons = document.querySelectorAll(".plus");
  const numberDisplays = document.querySelectorAll(".number");
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


const addToCart = document.querySelector(".add-cart");

addToCart.addEventListener("click", function () {
    
    const details = document.querySelector(".details");
    const brandName = details.querySelector(".brand-name").innerText;
    const heading = details.querySelector(".heading").innerText;
    const price = details.querySelector(".price").innerText;
    const imgSrc = document.querySelector(".first-img").getAttribute('src');
    
    const productObject = {
        name: brandName,
        heading: heading,
        price: price,
        image: imgSrc,
        id: randomIdGenerator()
    };

    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.push(productObject);

    localStorage.setItem('items', JSON.stringify(items));
    window.location.href = 'cart.html';
});



function randomIdGenerator () {
  let id = ""; 
  let str = "QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*m1234567890qwertyuiopasdfghjklzxcvbn";
    for(let i = 0; i < 12; i++){
      let char = Math.floor(Math.random() * str.length + i);
      id += str.charAt(char);

    }
    return id;

}

