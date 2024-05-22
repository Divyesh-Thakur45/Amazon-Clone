let right = document.querySelector(".right-side");
let slider = document.querySelector(".sub-slider");
let left = document.querySelector(".left-side");

function getScrollAmount() {
    const slideWidth = slider.querySelector("img").clientWidth;
    return slideWidth;
}

right.addEventListener("click", () => {
    slider.scrollLeft += getScrollAmount();
});

left.addEventListener("click", () => {
    slider.scrollLeft -= getScrollAmount();
});

window.addEventListener('resize', () => {
    // Optional: Adjustments on resize if needed
});


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
                <img src="${image1}" alt="">
                <p>${title1}</p>
            </div>
            <div class="sub-box">
                <img src="${image2}" alt="">
                <p>${title2}</p>
            </div>
        </div>
        <div class="small-box">
            <div class="sub-box">
                <img src="${image3}" alt="">
                <p>${title3}</p>
            </div>
            <div class="sub-box">
                <img src="${image4}" alt="">
                <p>${title4}</p>
            </div>
        </div>
        <a href="#">See All</a>
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

function mobileCard(image, discount, title, price, mrp) {
    let div = `
    <div class="m1">
        <div class="img-card">  
            <img src="${image}" alt="">
        </div>
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
        return mobileCard(el.image, el.discount, el.title, el.price, el.mrp)
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
                <img src=${image2} alt="">
                <img src=${image3} alt="">
                <img src=${image4} alt="">
                <img src=${image5} alt="">
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

let leftArrow4 = document.querySelector(".leftArrow4")
let decorationSlider = document.querySelector(".decoration-slider")
let RightArrow4 = document.querySelector(".RightArrow4")

RightArrow4.addEventListener("click", () => {
    decorationSlider.style.scrollBehavior = "smooth"
    decorationSlider.scrollLeft += 1000

})
leftArrow4.addEventListener("click", () => {
    decorationSlider.style.scrollBehavior = "smooth"
    decorationSlider.scrollLeft -= 1000
})


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


let leftArrow5 = document.querySelector(".leftArrow5")
let shoesSlider = document.querySelector(".shoes-slider")
let RightArrow5 = document.querySelector(".RightArrow5")

RightArrow5.addEventListener("click", () => {
    shoesSlider.style.scrollBehavior = "smooth"
    shoesSlider.scrollLeft += 1000

})
leftArrow5.addEventListener("click", () => {
    shoesSlider.style.scrollBehavior = "smooth"
    shoesSlider.scrollLeft -= 1000
})


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