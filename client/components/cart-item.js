import React from 'react'
import DeleteCartItem from './cart-item-delete'

const CartItem = props => {
  const item = props.item
  return (
    <div key={item.id}>
      <img className="cartThumbnail" src={item.fruit.imageUrl} />
      <h3>{item.fruit.name}</h3>
      <p>quantity: {item.quantity}</p>
      <p>total price: {item.price}</p>
      <DeleteCartItem id={item.id} />
    </div>
  )
}

export default CartItem
