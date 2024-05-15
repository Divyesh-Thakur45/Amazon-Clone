let right = document.querySelector(".right-side")
let slider = document.querySelector(".sub-slider")
let left = document.querySelector(".left-side")

right.addEventListener("click", () => {
    slider.style.scrollBehavior = "smooth"
    slider.scrollLeft += 1520

})
left.addEventListener("click", () => {
    slider.style.scrollBehavior = "smooth"
    slider.scrollLeft -= 1520
})

function fetchData() {
    fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((data) => boxes(data))
        .catch((error) => console.log(error))
}
fetchData()
function card(image1,image2,image3,image4,title1,title2,title3,title4) {
    let div = `
    <div class="box">
        <h4>Appliances for your home | Up to 55% off</h4>
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
    </div>
    `
    return div
}

function boxes(data){
    let store = data.map((el)=>{
        return card(el.image1,el.image2,el.image3,el.image4, el.title1,el.title2,el.title3,el.title4)
    })
    document.querySelector(".sales").innerHTML = store.join("")
}



function mobileData(){
    fetch("http://localhost:3000/slider")
    .then((res)=>res.json())
    .then((data)=>mobileCardList(data))
    .catch((error)=>console.log(error))
}
mobileData()

function mobileCard(image,discount,title,price,mrp){
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

function mobileCardList(mobileDetail){
    let mobileBox = mobileDetail.map((el)=>{
        return mobileCard(el.image,el.discount,el.title,el.price,el.mrp)
    })
    document.querySelector(".mobile-slider").innerHTML = mobileBox.join("")
}

let rightside = document.querySelector(".RightArrow1")
let mobileSlider = document.querySelector(".mobile-slider")
let leftside = document.querySelector(".leftArrow1")

rightside.addEventListener("click", () => {
    mobileSlider.style.scrollBehavior = "smooth"
    mobileSlider.scrollLeft += 1000

})
leftside.addEventListener("click", () => {
    mobileSlider.style.scrollBehavior = "smooth"
    mobileSlider.scrollLeft -= 1000
})


function thirdSliderData(){
    fetch("http://localhost:3000/sports").then((res)=>res.json())
    .then((data)=>slideimagess(data))
    .catch((error)=>console.log(error))
}
thirdSliderData()

function sliderImg(image){
    let div = `
            <img src="${image}" alt="">
    `
    return div
}

function slideimagess(data){
    let store = data.map((e)=>{
        return sliderImg(e.image)
    })
    document.querySelector(".sport-slider").innerHTML = store.join("")
}

let leftArrow2 = document.querySelector(".leftArrow2")
let sportSlider = document.querySelector(".sport-slider")
let RightArrow2 = document.querySelector(".RightArrow2")

RightArrow2.addEventListener("click", () => {
    sportSlider.style.scrollBehavior = "smooth"
    sportSlider.scrollLeft += 1520

})
leftArrow2.addEventListener("click", () => {
    sportSlider.style.scrollBehavior = "smooth"
    sportSlider.scrollLeft -= 1520
})


function fourthSlider(){
    fetch("http://localhost:3000/product").then((res)=>res.json())
    .then((data)=>fourthcardList(data))
    .catch((error)=>console.log(error))
}
fourthSlider()

function fourthcard(image){
    let div = `
            <div class="product-img">
                <img src="${image}" alt="">
            </div>
    `
    return div
}

function fourthcardList(data){
    let store = data.map((e)=>{
        return fourthcard(e.image)
    })
    document.querySelector(".product-slider").innerHTML = store.join("")
}

let RightArrow3 = document.querySelector(".RightArrow3")
let productSlider = document.querySelector(".product-slider")
let leftArrow3 = document.querySelector(".leftArrow3")

RightArrow3.addEventListener("click", () => {
    productSlider.style.scrollBehavior = "smooth"
    productSlider.scrollLeft += 1000

})
leftArrow3.addEventListener("click", () => {
    productSlider.style.scrollBehavior = "smooth"
    productSlider.scrollLeft -= 1000
})