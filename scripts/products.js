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
      resObj.forEach(item => {
        let productContainer = document.createElement("div");
        productContainer.classList.add("card");
        productContainer.innerHTML = 
        `<img src="${item.image}" alt="product Image">
        <div class="product-info">
        <h2 class="product-title">${item.title}</h2>
        <h3 class="product-des">${item.category}</h3>
        <span class="original-price">$${item.price}</span>
        <p>${item.description}</p>
        <a href="product.html?id=${item.id}"><button class="card-submit-btn">Submit</button></a>
        </div>   
        `;
        productCard.appendChild(productContainer);
        });
      });
}
printData()
/* search Data function*/ 
function searchData(){
 let searchBar = document.getElementById("search-Data").value.toLowerCase();
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
  let selectedValue = document.getElementById("select-product").value.toLowerCase();
  let selectedNumber = document.getElementById("page-number").value || 20;
  
  let productContainer = document.createElement("div");
  productContainer.classList.add("card");
  let XHR = new XMLHttpRequest();

  XHR.open("get", URL, true);
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200){
      let result = XHR.response;
      let ObjectResult = JSON.parse(result);
      let sortData;
/********************************************************* */
      if (selectedValue == "category"){
        sortData = ObjectResult.sort((a, b) => a.category.localeCompare(b.category))
        let searchElement = document.querySelector(".products");
        searchElement.innerHTML = "";
        for(productName of sortData){
          let productContainer = document.createElement("div");
          productContainer.classList.add("card");
          productContainer.innerHTML += `
          <img src="${productName.image}" alt="product Image">
        <div class="product-info">
        <h2 class="product-title">${productName.title}</h2>
        <h3 class="product-des">${productName.category}</h3>
        <span class="original-price">$${productName.price}</span>
        <p>${productName.description}</p>
        <a href="product.html?id=${productName.id}"><button class="card-submit-btn">Submit</button></a>
        </div>`;
          searchElement.appendChild(productContainer);
        }
        console.log(sortData)

        /********************************************* */
      } else if (selectedValue == "price"){
        sortData = ObjectResult.sort((num1, num2) => Number(num1.price) - Number(num2.price))
        let elementPrice = document.querySelector(".products");
        elementPrice.innerHTML = "";
        for (product of sortData){
          let productsContainer = document.createElement("div")
          productsContainer.classList.add("card");
          productsContainer.innerHTML += `
          <img src="${product.image}" alt="product Image">
          <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <h3 class="product-des">${product.category}</h3>
          <span class="original-price">$${product.price}</span>
          <p>${product.description}</p>
          <a href="product.html?id=${product.id}">
          <button class="card-submit-btn">Submit</button>
          </a>
          </div>`;
          elementPrice.appendChild(productsContainer);
        }
        console.log(sortData)
      } else {
        sortData = ObjectResult;
        console.log(sortData)
      }
      sortData = sortData.slice(0, selectedNumber)
      let searchElement = document.querySelector(".products");
      searchElement.innerHTML = "";
      for (productPage of sortData){
        let productPageContainer = document.createElement("div");
        productPageContainer.classList.add("card")
        productPageContainer.innerHTML += `
        <img src="${productPage.image}" alt="product Image">
        <div class="product-info">
        <h2 class="product-title">${productPage.title}</h2>
        <h3 class="product-des">${productPage.category}</h3>
        <span class="original-price">$${productPage.price}</span>
        <p>${productPage.description}</p>
        <a href="product.html?id=${productPage.id}">
          <button class="card-submit-btn">Submit</button>
          </a>
        </div>`
        ;
        searchElement.appendChild(productPageContainer);
      }
      console.log(sortData)
    }
  }
  XHR.send()
}

