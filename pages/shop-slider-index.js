let URL = "https://fakestoreapi.com/products";
let XHR = new XMLHttpRequest();
function getData(){
    XHR.open("get", URL, true)
    XHR.onload = function(){
        if (XHR.status == 200){
            let res = XHR.response;
            let resObj = JSON.parse(res)
            let productCard = document.querySelector("product-card");
            
            resObj.slice(1, 3).forEach(item => {
                let productContainer = document.createElement("div");
                productContainer.classList.add("card");
                productContainer.innerHTML = 
               `<img src="${item.image}" alt="product Image">
                    <div class="product-info">
                        <h2 class="product-title">${item.title}</h2>
                        <h3 class="product-des">${item.category}</h3>
                        <span class="original-price">$${item.price}</span>
                        <p>lorem</p>
                    </div>   
               `;
               productCard.appendChild(productContainer)
            })
            console.log(resObj)
        }
    }
    XHR.send()
}
getData()