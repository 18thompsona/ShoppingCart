function CartItem({image, title, description, price, id, RemoveFromCart}) {
 
  return (
    <div className='cart-item'>
        <img className='item-img' src={image} alt={description}/>
        <h2>{title}</h2>
        <h2>${price}</h2>
        <button onClick={() => RemoveFromCart(id)}>Remove From Cart</button>
    </div>
  )
}

export default CartItem;