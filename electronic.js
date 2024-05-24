let para = new URLSearchParams(window.location.search)
let subslider = JSON.parse(para.get("subSlider"))

let phone = subslider.map((el) => `
    <div class="electronicImg">
        <img src="${el.image}" alt="">
    </div>
    <div class="electronicBody">
        <h3> ${el.title}</h3>
        <div class="phoneDiscount">${el.discount}</div>
        <span> ${el.price}</span><span>M.R.P : <del>${el.mrp}</del></span>
    </div>
`);
document.querySelector(".subElectronic").innerHTML = phone.join("")