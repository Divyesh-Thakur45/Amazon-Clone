let para = new URLSearchParams(window.location.search)
let subslider = JSON.parse(para.get("subSlider"))

let phone = subslider.map((el) => {
    let div = `
        <div class="subElectronic">
        <div class="electronicImg">
            <img src="${el.image}" alt="">
        </div>
        <div class="electronicBody">
        <h3 class="electronicBodyTitle">${el.title}</h3>
        <h5 class="electronicBodyDescription">${el.description}</h5>
        <div class="electronicfeedBack">

            <div class="electronicstar">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>

            </div>
            <i class="bi bi-chevron-down downNum me-1"></i>
            <span class="electronicrate">126</span>
        </div>

        <p class="boughtphone">1K+ bought in past month</p>
        <a href="" class="Deal">Limited time deal</a>
        <div class="elePayMent">
            <span class="ElePrice">${el.price}</span><span class="eleMrp">M.R.P : <del>${el.mrp}</del></span>
            <span class="phoneDiscount">(${el.discount} )</span>
        </div>
        <div class="primeLogo">
            <img src="img/prime-logo.svg" alt="">
        </div>
        <div class="delevry">
            <span>FREE Delivery by Amazon</span>
        </div>
        </div>
</div>
`
    return div;
});
document.querySelector(".electronicPageRightSide").innerHTML = phone.join("")



// input type range js 
