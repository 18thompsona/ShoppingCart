import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import Item from './Item';
import CartItem from './CartItem';


function ShopPage() {
  const [shopData, setShopData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [showCart, setShowCart] = useState(false);

  let totalCost = cartData.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setShopData(json));
  },[])

  useEffect(() =>{
    console.log(shopData[0]);
  },[shopData])

  function AddToCart(id){
    let item = shopData.find(product => product.id === id);
    setCartData((prevCart) => {
      return [...prevCart, item];
    })
  }

  function RemoveFromCart(id){
    setCartData((prevCart) => {
      let copy = [...prevCart];
      let index = copy.findIndex(item => item.id === id);

      if(index !== -1){
        copy.splice(index, 1);
      }
      return copy;
    })
  }

  function toggleShowCart(){
    setShowCart(!showCart);
  }

  return (
    <div>
      <nav>
        <h1 className='nav-name'>Shopi Shopi</h1>
        <ul className='nav-links'>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/Shop">Shop</Link> </li>
        </ul>
        <button className='nav-cart' onClick={() => toggleShowCart()}>Cart</button>
      </nav>

      {!showCart ? (
        <main>
          <div className="listings">
            {shopData.map((product, index) => (
              <Item
                key={index}
                image = {product.image}
                title = {product.title}
                description = {product.description}
                price = {product.price.toFixed(2)}
                id = {product.id}
                AddToCart = {AddToCart}
              />
            ))}
          </div>  
        </main>        
      ) : (
        <div className="cartview">
          {cartData.map((product, index) => (
            <CartItem
              key={index}
              image = {product.image}
              title = {product.title}
              description = {product.description}
              price = {product.price.toFixed(2)}
              id = {product.id}
              RemoveFromCart = {RemoveFromCart}
            />
          ))}
          <div className='breakline'></div>
          Total: ${totalCost}
        </div>
        )
      }
    </div>
  )
}

export default ShopPage;