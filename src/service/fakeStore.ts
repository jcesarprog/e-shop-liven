import axios from "axios";

/**
 * Fake store example calls
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json)

    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=>console.log(json)
    
    fetch('https://fakestoreapi.com/products?sort=desc')
    .then(res=>res.json())
    .then(json=>console.log(json))
*/

export async function getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);

}
