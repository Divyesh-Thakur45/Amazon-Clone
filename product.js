let productCardv= document.querySelector(".product")
window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search)
    const container = JSON.parse(params.get("ACInnerData"))
    console.log(container)
    // container.forEach((element) => {
    //     let div = document.createElement("div")
    //     div.classList.add("sameProduct")
    //     div.innerHTML =`
    //         <div class="productImg">
    //             <img src=${element.image} alt="">
    //         </div>
    //         <h6>${element.title}</h6>
    //         <p>6K+ bought in past month</p>
    //         <div class="d-flex">
    //             <h5>₹36,990</h5><span>M.R.P : <del>₹58,400</del></span>
    //         </div>
    //         <span>(37% off)</span>
    //         `
    //         productCardv.appendChild(div)
    //     console.log(element)
    // });
})