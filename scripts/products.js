let URL = "https://fakestoreapi.com/products";
let XHR = new XMLHttpRequest();
function getData(Data){
    XHR.open("get", URL, true)
    XHR.onload = function(){
        if (XHR.status == 200){
            let res = XHR.response;
            let resObj = JSON.parse(res)
            Data(resObj)
      console.log(resObj);
    }
  };
  XHR.send();
}
getData();

function printData(){
    getData(function(resObj) {
      let productCard = document.querySelector(".products");
      resObj.slice(1, 7).forEach(item => {
        let productContainer = document.createElement("div");
        productContainer.classList.add("card");
        productContainer.innerHTML = 
        `<img src="${item.image}" alt="product Image">
        <div class="product-info">
        <h2 class="product-title">${item.title}</h2>
        <h3 class="product-des">${item.category}</h3>
        <span class="original-price">$${item.price}</span>
        <p>${item.description}</p>
        </div>   
        `;
        productCard.appendChild(productContainer);
        });
      });
}
printData()
function searchData(){
  let searchBar = document.getElementById("search-Data").value.toLowerCase().trim();

  XHR.open("get", URL, true)
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200){
      let result = XHR.response;
      let resultObj = JSON.parse(result);
      let filtereData = resultObj.filter(product => 
        product.title.toLowerCase().includes(searchBar)
      )
      console.log(filtereData);
    }
  }
  XHR.send()
}