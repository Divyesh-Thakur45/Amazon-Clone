document.addEventListener('DOMContentLoaded', () => {
    let right = document.querySelector(".right-side");
    let slider = document.querySelector(".sub-slider");
    let left = document.querySelector(".left-side");

    if (!right || !slider || !left) {
        console.error("Required elements are missing.");
        return;
    }

    function getScrollAmount() {
        const slide = slider.querySelector("img");
        if (slide) {
            return slide.clientWidth;
        }
        return 0; // Fallback if no images are found
    }

    right.addEventListener("click", () => {
        const scrollAmount = getScrollAmount();
        if (scrollAmount > 0) {
            slider.scrollLeft += scrollAmount;
        }
    });

    left.addEventListener("click", () => {
        const scrollAmount = getScrollAmount();
        if (scrollAmount > 0) {
            slider.scrollLeft -= scrollAmount;
        }
    });

    window.addEventListener('resize', () => {
        // Optional: Adjustments on resize if needed
        // For example, you might want to reset the scroll position or recalculate something
    });
});

function bigSlider() {
    fetch("http://localhost:3000/bigImg")
        .then((res) => res.json())
        .then((data) => bigSliderCardList(data))
        .catch((error) => console.log(error))
}
bigSlider()

function bigSliderCard(image) {
    let div = `
        <img src="${image}">
    `
    return div
}

function bigSliderCardList(data) {
    let store = data.map((e) => {
        return bigSliderCard(e.image)
    })
    document.querySelector(".sub-slider").innerHTML = store.join("")
}

function fetchData() {
    fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((data) => boxes(data))
        .catch((error) => console.log(error))
}
fetchData()
function card(image1, image2, image3, image4, title1, title2, title3, title4, title) {
    let div = `
    <div class="box">
        <h4>${title}</h4>
        <div class="small-box">
            <div class="sub-box">
            <a href="product.html?image1=${encodeURIComponent(image1)}">
                <img src="${image1}" alt="">
                <p>${title1}</p>
            </a>
            </div>
            <div class="sub-box">
            <a href="product.html?image2=${encodeURIComponent(image2)}">
                <img src="${image2}" alt="">
                <p>${title2}</p>
            </a>
            </div>
        </div>
        <div class="small-box">
            <div class="sub-box">
            <a href="product.html?image3=${encodeURIComponent(image3)}">
                <img src="${image3}" alt="">
                <p>${title3}</p>
            </a>
            </div>
            <div class="sub-box">
            <a href="product.html?image4=${encodeURIComponent(image4)}">
                <img src="${image4}" alt="">
                <p>${title4}</p>
            </a>
            </div>
        </div>
        <a href="#" class="seeAll">See All</a>
    </div>
    `

    return div
}

function boxes(data) {
    let store = data.map((el) => {
        return card(el.image1, el.image2, el.image3, el.image4, el.title1, el.title2, el.title3, el.title4, el.title)
    })
    document.querySelector(".sales").innerHTML = store.join("")
}



function mobileData() {
    fetch("http://localhost:3000/slider")
        .then((res) => res.json())
        .then((data) => mobileCardList(data))
        .catch((error) => console.log(error))
}
mobileData()

function mobileCard(image, discount, title, price, mrp, subSlider) {
    console.log(subSlider)
    let div = `
    <div class="m1">
    <a href="Electronic.html?subSlider=${encodeURIComponent(JSON.stringify(subSlider))}">
        <div class="img-card">  
            <img src="${image}" alt="">
        </div>
    </a>
        <div class="mobile-body">
            <p class="discountPara"><span class="discount">${discount}</span> Limited time deal</p>
            <p class="price">${price} <span class="mrp">M.R.P. : <del class="mrp">${mrp}</del></span></p>
            <h6>${title}</h6>
        </div>
    </div>
    `
    return div
}

function mobileCardList(mobileDetail) {
    let mobileBox = mobileDetail.map((el) => {
        return mobileCard(el.image, el.discount, el.title, el.price, el.mrp, el.subSlider)
    })
    document.querySelector(".mobile-slider").innerHTML = mobileBox.join("")
}

let rightside = document.querySelector(".RightArrow1");
let mobileSlider = document.querySelector(".mobile-slider");
let leftside = document.querySelector(".leftArrow1");

rightside.addEventListener("click", () => {
    mobileSlider.style.scrollBehavior = "smooth";
    mobileSlider.scrollLeft += mobileSlider.clientWidth;
});

leftside.addEventListener("click", () => {
    mobileSlider.style.scrollBehavior = "smooth";
    mobileSlider.scrollLeft -= mobileSlider.clientWidth;
});



function thirdSliderData() {
    fetch("http://localhost:3000/sports").then((res) => res.json())
        .then((data) => slideimagess(data))
        .catch((error) => console.log(error))
}
thirdSliderData()

function sliderImg(image) {
    let div = `
            <img src="${image}" alt="">
    `
    return div
}

function slideimagess(data) {
    let store = data.map((e) => {
        return sliderImg(e.image)
    })
    document.querySelector(".sport-slider").innerHTML = store.join("")
}

let leftArrow2 = document.querySelector(".leftArrow2");
let sportSlider = document.querySelector(".sport-slider");
let RightArrow2 = document.querySelector(".RightArrow2");

RightArrow2.addEventListener("click", () => {
    sportSlider.style.scrollBehavior = "smooth"
    sportSlider.scrollLeft += sportSlider.clientWidth;
});

leftArrow2.addEventListener("click", () => {
    sportSlider.style.scrollBehavior = "smooth"
    sportSlider.scrollLeft -= sportSlider.clientWidth;
});



function fourthSlider() {
    fetch("http://localhost:3000/product").then((res) => res.json())
        .then((data) => fourthcardList(data))
        .catch((error) => console.log(error))
}
fourthSlider()

function fourthcard(image) {
    let div = `
            <div class="product-img">
                <img src="${image}" alt="">
            </div>
    `
    return div
}

function fourthcardList(data) {
    let store = data.map((e) => {
        return fourthcard(e.image)
    })
    document.querySelector(".product-slider").innerHTML = store.join("")
}

let leftArrow3 = document.querySelector(".leftArrow3");
let productSlider = document.querySelector(".product-slider");
let RightArrow3 = document.querySelector(".RightArrow3");

RightArrow3.addEventListener("click", () => {
    productSlider.style.scrollBehavior = "smooth"
    productSlider.scrollLeft += productSlider.clientWidth;
});

leftArrow3.addEventListener("click", () => {
    productSlider.style.scrollBehavior = "smooth"
    productSlider.scrollLeft -= productSlider.clientWidth;
});


function shoppingData() {
    fetch("http://localhost:3000/shopping")
        .then((res) => res.json())
        .then((data) => shoppingCardList(data))
        .catch((error) => console.log(error))
}
shoppingData()

function shoppingCard(title, image1, description, price, mrp, image2, image3, image4, image5) {
    let div = `
    <div class="shoppingBox">
        <h6>${title}</h6>
        <div class="shoppingBoxHead">
            <img src="${image1}" alt="">
        </div>
        <div class="shoppingBoxBody">
            <p>${description}</p>
            <span class="shoppingPrice">${price}<sup>00</sup> </span><span class="shopping-mrp">M.R.P : <del>${mrp}</del></span>
            <div class="sub-shoppingBoxBody">
                <div class="shoppingBoxSmallImg">
                <img src="${image2}" alt="">
                </div>
                <div class="shoppingBoxSmallImg">
                    <img src="${image3}" alt="">
                </div>
                <div class="shoppingBoxSmallImg">
                    <img src="${image4}" alt="">
                </div>
                <div class="shoppingBoxSmallImg">
                    <img src="${image5}" alt="">
                </div>
            </div>
            <a href="#">See more</a>
        </div>
    </div>
    `
    return div
}

function shoppingCardList(data) {
    let shoppingStore = data.map((e) => {
        return shoppingCard(e.title, e.image1, e.description, e.price, e.mrp, e.image2, e.image3, e.image4, e.image5)
    })
    document.querySelector(".shoppingMainBox").innerHTML = shoppingStore.join("")
}




// decoration

function FifthSliderData() {
    fetch("http://localhost:3000/decoration").then((res) => res.json())
        .then((data) => FifthSliderCardList(data))
        .catch((error) => console.log(error))
}
FifthSliderData()

function FifthSliderCard(image) {
    let div = `
    <div class="decoration-img">
        <img src="${image}" alt="">
    </div>
    `
    return div
}

function FifthSliderCardList(data) {
    let FifthSliderstore = data.map((e) => {
        return sliderImg(e.image)
    })
    document.querySelector(".decoration-slider").innerHTML = FifthSliderstore.join("")
}

let leftArrow4 = document.querySelector(".leftArrow4");
let decorationSlider = document.querySelector(".decoration-slider");
let RightArrow4 = document.querySelector(".RightArrow4");

// Function to get scroll amount based on viewport width
function getScrollAmount() {
    if (window.innerWidth >= 1200) {
        return 1000; // for large screens
    } else if (window.innerWidth >= 768) {
        return 500;  // for tabletss
    } else {
        return 300;  // for mobile devices
    }
}

RightArrow4.addEventListener("click", () => {
    decorationSlider.style.scrollBehavior = "smooth";
    decorationSlider.scrollLeft += getScrollAmount();
});

leftArrow4.addEventListener("click", () => {
    decorationSlider.style.scrollBehavior = "smooth";
    decorationSlider.scrollLeft -= getScrollAmount();
});

// Update scroll amount on window resize
window.addEventListener("resize", () => {
    // Optional: Adjust the scroll amount dynamically if needed
});



function singleData() {
    fetch("http://localhost:3000/brands")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((el) => {
                if (el.singleData) {
                    singleDataCardList(el.singleData);
                }
            });
        })
        .catch((error) => console.log(error));
}
singleData();

function singleDataCard(title, image) {
    return `
        <div class="Brandbox">
            <h4>${title}</h4>
            <div class="brand-box-bigimg">
                <img src="${image}" alt="">
            </div>
            <a href="#">See All offers</a>
        </div>
    `;
}

function singleDataCardList(data) {
    const store = data.map((e) => singleDataCard(e.title, e.image));
    document.querySelector("#left-brand").innerHTML = store.join("");
}



function multipleData() {
    fetch("http://localhost:3000/brands")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((el) => {
                if (el.multipleData) {
                    multipleDataCardList(el.multipleData);
                }
            });
        })
        .catch((error) => console.log(error));
}
multipleData();

function multipleDataCard(title, image1, image2, image3, image4, description1, description2, description3, description4, price1, price2, price3, price4) {
    return `
    <div class="Brandbox">
        <h4>${title}</h4>
    <div class="BrandboxMain">
        <div class="BrandboxSub">
            <div class="brand-box-img">
                <img src="${image1}" alt="">
            </div>
            <div class="brand-box-body">
                <p>${description1}</p>
                <h6>${price1}</h6>
            </div>
        </div>
        <div class="BrandboxSub">
            <div class="brand-box-img">
                <img src="${image2}" alt="">
            </div>
            <div class="brand-box-body">
                <p>${description2}</p>
                <h6>${price2}</h6>
            </div>
        </div>
    </div>
    <div class="BrandboxMain">
        <div class="BrandboxSub">
            <div class="brand-box-img">
                <img src="${image3}" alt="">
            </div>
            <div class="brand-box-body">
                <p>${description3}</p>
                <h6>${price3}</h6>
            </div>
        </div>
        <div class="BrandboxSub">
            <div class="brand-box-img">
                <img src="${image4}" alt="">
            </div>
            <div class="brand-box-body">
                <p>${description4}</p>
                <h6>${price4}</h6>
            </div>
        </div>
    </div>
    <a href="#">See All</a>
    </div>
    `;
}

function multipleDataCardList(data) {
    const store = data.map((e) => multipleDataCard(e.title, e.image1, e.image2, e.image3, e.image4, e.description1, e.description2, e.description3, e.description4, e.price1, e.price2, e.price3, e.price4));
    document.querySelector("#right-brand").innerHTML = store.join("");
}


let leftArrow5 = document.querySelector(".leftArrow5");
let shoesSlider = document.querySelector(".shoes-slider");
let RightArrow5 = document.querySelector(".RightArrow5");

RightArrow5.addEventListener("click", () => {
    let scrollAmount = window.innerWidth * 0.8; // Adjust 0.8 as needed
    shoesSlider.style.scrollBehavior = "smooth";
    shoesSlider.scrollLeft += scrollAmount;
});

leftArrow5.addEventListener("click", () => {
    let scrollAmount = window.innerWidth * 0.8; // Adjust 0.8 as needed
    shoesSlider.style.scrollBehavior = "smooth";
    shoesSlider.scrollLeft -= scrollAmount;
});



function shoesSliderData() {
    fetch("http://localhost:3000/shoes").then((res) => res.json())
        .then((data) => shoesSliderCardList(data))
        .catch((error) => console.log(error))
}
shoesSliderData()

function shoesSliderCard(image) {
    let div = `
            <div class="shoes-img">
                <img src="${image}" alt="">
            </div>
    `
    return div
}

function shoesSliderCardList(data) {
    let shoesSliderstore = data.map((e) => {
        return shoesSliderCard(e.image)
    })
    document.querySelector(".shoes-slider").innerHTML = shoesSliderstore.join("")
}