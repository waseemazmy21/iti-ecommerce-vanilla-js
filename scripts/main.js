

function createProduct(product) {
    const div = document.createElement('div');
    div.className = 'product';
    const productPrice = document.getElementById("product-price").value;
    const productDescription = document.getElementById("product-description").value;

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription
    };

    console.log(product);
    alert("Product created successfully!");
}