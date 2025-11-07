import React, { useState } from 'react'

function Cart({ currentItems }) {
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
