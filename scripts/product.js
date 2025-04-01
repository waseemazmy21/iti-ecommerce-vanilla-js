const productPage = document.getElementById("Product-page")
const productDetails = productPage.querySelector(".details")

const Discount = 10         // Temp variable for test
const price = 32            // Temp variable for test
let added = false           // Temp variable for test


const getQueryParams = _ => {
    const params = new URLSearchParams(window.location.search)

    return {
        category: params.get("category"),
        name: params.get("name")
    }
}

const { category: categoryName, name: productName } = getQueryParams()



function displayProductDetails(product) {
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "image")
    productDetails.appendChild(imgDiv)

    const image = document.createElement("img")
    image.setAttribute("src", `../imgs/bag.jpg`)
    imgDiv.appendChild(image)


    const textContent = document.createElement("div")
    textContent.setAttribute("class", "text")
    productDetails.appendChild(textContent)

    const prod_name = document.createElement("h2")
    const textPName = document.createTextNode(`Product Name`)
    prod_name.appendChild(textPName)
    textContent.appendChild(prod_name)

    const salary = document.createElement("div")
    salary.setAttribute("class", "salary")
    salary.innerHTML = `${Discount > 0 ? `<span>$${getDiscount(price, Discount)}</span> <del>$${price}</del>` : `<span>$${price}</span>`}`
    textContent.appendChild(salary)

    const descriptionElement = document.createElement("p")
    descriptionElement.setAttribute("class", "secondary-text")
    const descriptionText = document.createTextNode(`Lorem ipsum dolor sit, amet consectetur adipisicing elit eos ipsam sint, nesciunt debitis. Quas. `)
    descriptionElement.appendChild(descriptionText)
    textContent.appendChild(descriptionElement)



    const addBTN = document.createElement("button")
    addBTN.setAttribute("class", !added ? "btn" : '')
    const btnText = document.createTextNode(added ? "Added" : "Add to card")
    addBTN.appendChild(btnText)
    addBTN.onclick = function () {
        added = !added
        addBTN.setAttribute("class", !added ? "btn" : '')
        addBTN.innerHTML = added ? "Added" : "Add to card"
    }
    textContent.appendChild(addBTN)
}

function getDiscount(mainPrice, discount) {
    return (mainPrice - (discount / 100) * mainPrice)
}

displayProductDetails()
