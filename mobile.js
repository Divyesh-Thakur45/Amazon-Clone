// function mobileData(){
//     fetch("http://localhost:3000/slider")
//     .then((res)=>res.json())
//     .then((data)=>mobileCardList(data))
//     .catch((error)=>console.log(error))
// }
// mobileData()

// function mobileCard(image,discount,title,price,mrp){
//     let div = `
//     <div class="m1">
//         <img src="${image}" alt="">
//         <div class="mobile-body">
//             <p class="discountPara"><span class="discount">${discount}</span> Limited time deal</p>
//             <p class="price">${price} <span class="mrp">M.R.P. : <del class="mrp">${mrp}</del></span></p>
//             <h6>${title}</h6>
//         </div>
//     </div>
//     `
//     return div
// }

// function mobileCardList(mobileDetail){
//     let mobileBox = mobileDetail.map((el)=>{
//         return mobileCard(el.image,el.discount,el.title,el.price,el.mrp)
//     })
//     document.querySelector(".mobile-slider").innerHTML = mobileBox.join("")
// }