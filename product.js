let param = new URLSearchParams(window.location.search)
let image1 = param.get("image1")
// let image2 = param.get("image2")
// let image3 = param.get("image3")
// let image4 = param.get("image4")

let image = document.querySelector(".productImg")
image.src = image1