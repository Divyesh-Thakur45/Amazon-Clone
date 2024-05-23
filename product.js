let param = new URLSearchParams(window.location.search)
let image1 = param.get("image1")
let image2 = param.get("image2")
let image3 = param.get("image3")
let image4 = param.get("image4")

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