import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import Item from './Item';


function ShopPage() {
  const [shopData, setShopData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setShopData(json));
  },[])

  useEffect(() =>{
    console.log(shopData);
  },[shopData])

  return (
    <div>
      <nav>
        <h1 className='nav-name'>Shop Shopi</h1>
        <ul className='nav-links'>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/Shop">Shop</Link> </li>
        </ul>
        <button className='nav-cart'>Cart</button>
      </nav>

      <main>
        {/* <p>So, What Cha Buyin?</p> */}
        <div className="listings">
          {shopData.map((products, index) => (
            <Item
              key={index}
              image = {products.image}
              title = {products.title}
              description = {products.description}
              price = {products.price}
            />
          ))}
        </div>
        
      </main>

    </div>
  )
}

export default ShopPage;