import React, {useEffect, useState} from 'react';
import { DB_URL } from '../store/firebase';
function Products(){
    console.log('responseData')
    const [products, setProducts] = useState([]);
    let loading = true;
useEffect(()=>{
const fetchProducts = async () => {
   const response = await fetch(`${DB_URL}/products.json`);

if(!response.ok){
    throw new Error('Something');
}
const responseData  = await response.json();
const loadedProducts = [];
for(const key in responseData){
    loadedProducts.push({
        id: key,
        name: responseData[key].name,
        price: responseData[key].price
    })
    setProducts(loadedProducts);
}


}
fetchProducts()
}, [])
if(products.length > 0 ){
   loading = false;
}
    return(
        <>
        <h1>Products</h1>
        {loading && <p>Loading...</p>}
        {!loading && <p>done</p>}
        </>
    )
}
export default Products; 