let para = new URLSearchParams(window.location.search)
let subslider = JSON.parse(para.get("subSlider"))

let phone = subslider.map((el) => `
    <div class="electronicImg">
        <img src="${el.image}" alt="">
    </div>
    <div class="electronicBody">
        <h3> Redmi 12 5G Jade Black 6GB RAM 128GB ROM</h3>
        <div class="phoneDiscount">23% off</div>
        <span >₹9,999.00</span><span>M.R.P : <del>₹12,999.00</del></span>
    </div>
`);
document.querySelector(".subElectronic").innerHTML = phone.join("")