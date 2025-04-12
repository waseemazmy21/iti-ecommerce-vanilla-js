const productPage = document.getElementById("Product-page")
const productDetails = productPage.querySelector(".details")

// const Discount = 10         // Temp variable for test

let myProductsId = [];

if (localStorage.productsChoise) {
    myProductsId = JSON.parse(localStorage.productsChoise)
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search)

    return params.get("id")
}

let added = myProductsId.includes(+ getQueryParams());

(function () {
    let createReq = new XMLHttpRequest()

    createReq.open("GET", "https://fakestoreapi.com/products/" + getQueryParams())
    createReq.responseType = "json"

    createReq.onloadend = function () {
        if (createReq.readyState == 4 && createReq.status == 200) {
            console.log(createReq.response);
            displayProductDetails(createReq.response)
            
        }
        
    }
    createReq.send()
})();


function displayProductDetails(product) {
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "image")
    productDetails.appendChild(imgDiv)

    const image = document.createElement("img")
    image.setAttribute("src", `${product.image}`)
    imgDiv.appendChild(image)


    const textContent = document.createElement("div")
    textContent.setAttribute("class", "text")
    productDetails.appendChild(textContent)

    const prod_name = document.createElement("h2")
    const textPName = document.createTextNode(`${product.title}`)
    prod_name.appendChild(textPName)
    textContent.appendChild(prod_name)

    const salary = document.createElement("div")
    salary.setAttribute("class", "salary")
    salary.innerHTML = `${Discount > 0 ? `<span>$${getDiscount(product.price, Discount)}</span> <del>$${product.price}</del>` : `<span>$${product.price}</span>`}`
    textContent.appendChild(salary)

    const descriptionElement = document.createElement("p")
    descriptionElement.setAttribute("class", "secondary-text")
    const descriptionText = document.createTextNode(`${product.description}`)
    descriptionElement.appendChild(descriptionText)
    textContent.appendChild(descriptionElement)



    const addBTN = document.createElement("button")
    addBTN.setAttribute("class", !added ? "btn" : '')
    const btnText = document.createTextNode(added ? "Added" : "Add to card")
    addBTN.appendChild(btnText)
    addBTN.onclick = function () {
        addProductToLocalStorage(product.id)
        addBTN.setAttribute("class", !added ? "btn" : '')
        addBTN.innerHTML = added ? "Added" : "Add to card"
    }
    textContent.appendChild(addBTN)
}

function getDiscount(mainPrice, discount) {
    return (mainPrice - (discount / 100) * mainPrice)
}

let addProductToLocalStorage = function (productID) {
    if (!myProductsId.includes(productID)) {
        myProductsId.push(productID)
        localStorage.productsChoise = JSON.stringify(myProductsId)
        added = true
    }

}