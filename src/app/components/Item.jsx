import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";


function Item({image, title, description, price, id, AddToCart}) {
 
  return (
    <div className='item'>
        <img className='item-img' src={image} alt={description}/>
        <div className='item-info'>
            <h2>{title}</h2>
            <h3>${price}</h3>
            <button onClick={() => AddToCart(id)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Item;