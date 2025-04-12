export function getProducts() {
    var xhr = new XMLHttpRequest();
    var retrievedData;
    xhr.open("GET", "https://fakestoreapi.com/products", false);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) 
        {
            if (xhr.status == 200) {
                retrievedData = JSON.parse(xhr.response);
            }
            else {
                console.log("request failed!");
            }
        }
    }
    xhr.send();
    return retrievedData;
} 


export function getProductById(prodId) {
    var xhr = new XMLHttpRequest();
    var retrievedData;
    xhr.open("GET", "https://fakestoreapi.com/products/" + prodId, false);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                retrievedData = JSON.parse(xhr.response);
            }
        else{
            console.log("request failed!");
            }
        }
    }
    xhr.send();
    return retrievedData;
}