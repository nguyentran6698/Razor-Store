import url from "./URL.js"
export default async()=>{
    const response = await fetch(`${url}/products`).catch((error)=>{
        console.log(error);
    });
    const products = await response.json();
    if(products.error){
        return null;
    }
    return products;
}