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
/* search Data function*/ 
function searchData(){
 let searchBar = document.getElementById("search-Data").value.trim();
 XHR.open("get", URL, true)
 XHR.onreadystatechange = function(){
  if (XHR.readyState == 4 && XHR.status == 200){
    let result = XHR.response;
    let objectResult = JSON.parse(result)
    let filterData = objectResult.filter(product => 
      product.title.toLowerCase().includes(searchBar)
    );
    console.log(filterData) 
  }
 }
  XHR.send()
}
/*search data by categories and price amd number slice */
function searchCategory(){
  let selectedValue = document.getElementById("select-product").value;
  let selectedNumber = document.getElementById("page-number").value;

  XHR.open("get", URL, true)
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200){
      let result = XHR.response;
      let ObjectResult = JSON.parse(result);
      let sortData;

      if (selectedValue == "category"){
        sortData = ObjectResult.sort((a, b) => a.category.localeCompare(b.category))
      } else if (selectedValue == "price"){
        sortData = ObjectResult.sort((num1, num2) => num1.price - num2.price)
      } else {
        sortData = ObjectResult;
      }
      sortData = sortData.slice(0, selectedNumber)
      console.log(sortData)
    }
  }
  XHR.send()
}