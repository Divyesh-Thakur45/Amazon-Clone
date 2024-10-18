function fetchData() {
    fetch("https://amazonjsonserver.onrender.com/addToCard")
        .then((res) => res.json())
        .then((data) => cardList(data))
        .catch((error) => console.log(error))
}
fetchData()

function card(id, title, description, price, mrp, discount, imageOfPhone) {
    return `
    <div class="ShoppingCardBox">
    <div class="ShoppingCardHead">
        <img src="${imageOfPhone}" alt="">  
    </div>
    <div class="ShoppingCardBody">
        <h1 class="ShoppingCardBodyTitle">${title}</h1>
        <div class="shoppingCardBodyHead">
            <h5>${description}</h5>
            <div class="subPriceMrpDis">
                <p>Rs . ${price}</p>
                <span>M.R.P : <del>${mrp}</del></span>
                <a href="">${discount}</a>
            </div>
        </div>
        <span class="Instock">In stock</span>
        <p class="FreeShopping">Eligible for FREE Shipping</p>
        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt="">
        <div class="ShoppingCardInput">
            <input type="checkbox" name="" id="">
            <span>This will be a giftThis is a gift <a href="#">Learn more</a></span>
        </div>
        <div>
            <div class="shoppingBoxBottom">
                <div class="dropdown">
                    <button class="Qty dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Qty : 1
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">1</a></li>
                        <li><a class="dropdown-item" href="#">2</a></li>
                        <li><a class="dropdown-item" href="#">3</a></li>
                        <li><a class="dropdown-item" href="#">4</a></li>
                        <li><a class="dropdown-item" href="#">5</a></li>
                        <li><a class="dropdown-item" href="#">6</a></li>
                        <li><a class="dropdown-item" href="#">7</a></li>
                        <li><a class="dropdown-item" href="#">8</a></li>
                        <li><a class="dropdown-item" href="#">9</a></li>
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                </div>
                <a href="" class="DeleteCard" data-id="${id}">Delete</a>
                <a href="" class="Btns">Save for later</a>
                <a href="" class="Btns">See more like this</a>
                <a href="" class="Btns">Share</a>
            </div>
        </div>
    </div>
</div>
<hr>
    `
}

function cardList(data) {
    let store = data.map((e) => {
        return card(e.id, e.title, e.description, e.price, e.mrp, e.discount, e.imageOfPhone)
    })
    document.querySelector(".subShoppingCard").innerHTML = store.join("")
}



document.addEventListener("click", (e) => {
   
    if (e.target.classList.contains("DeleteCard")) {
        e.preventDefault()
        DltBtn(e.target.dataset.id)
    }
})

function DltBtn(id) {
    fetch(`https://amazonjsonserver.onrender.com/addToCard/${id}`,{
        method : "DELETE"
    })

}