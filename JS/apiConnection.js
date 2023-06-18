import { product } from './product.js'

export async function getApi(endpoint = "products", request = "http://diwserver.vps.webdock.cloud:8765/"){
    request += endpoint
    return fetch(request).
    then(text => text.json()).
    then(response => {
        if(endpoint === "products")
            return returnProducts(response)
        else{
            return response
        }
        
    })
}

function returnProducts(response){
    let productsResponse = Array();
    for(let i = 0; i < response.products.length; i++){
        productsResponse[i] = Object.assign( Object.create(product), response.products[i])
    }
    return productsResponse
}