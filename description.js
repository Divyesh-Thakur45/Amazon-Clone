let param = new URLSearchParams(window.location.search)
let image1 = param.get("image1")
let image2 = param.get("image2")
let image3 = param.get("image3")
let image4 = param.get("image4")

// Electronic Page
let imageOfPhone = param.get("image")
let title = param.get("title")
let description = param.get("description")
let price = param.get("price")
let mrp = param.get("mrp")
let discount = param.get("discount")
let DescriptionTitle = document.querySelector(".ProductTitle")
DescriptionTitle.innerHTML = title
let DescriptionPageDe = document.querySelector(".ProductDescription")
DescriptionPageDe.innerHTML = description
let DescriptionDiscount = document.querySelector(".productDiscount")
DescriptionDiscount.innerHTML = discount
let DescriptionPrice = document.querySelector(".proPrice")
DescriptionPrice.innerHTML = price
let Descriptionmrp = document.querySelector(".DescMrp")
Descriptionmrp.innerHTML = mrp

// ThirdSlider  Image 
let Sliderimage = param.get("image")

let image = document.querySelector(".productSubImg")
if(image1){
    image.src = image1
}
else if(image2){
    image.src = image2
}
else if(image3){
    image.src = image3
}
else if(image4){
    image.src = image4
}
else if(Sliderimage){
    image.src = Sliderimage
}
else if(imageOfPhone){
    image.src = imageOfPhone
}


document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("AddTOCardProduct")){
        console.log(e.target.id)
    }
})

function addCard(){
    fetch("http://localhost:3000/slider")
}