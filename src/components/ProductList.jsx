import React, { useState } from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

function ProductList({ sampleProducts, addItems }) {
  return (
    <div>
      <h2>Available Products</h2>
    if (sampleProducts.length === 0) {
      <p>No products available</p>
    }
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} addItems={addItems}/>
      ))}
    </div>
  )
}

export default ProductList
