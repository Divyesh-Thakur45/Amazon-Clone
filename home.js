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