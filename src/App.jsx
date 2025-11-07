import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
function App() {

  const sampleProducts = [
    { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
    { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
  ]

  const [filterChoice, filterFunction] = useState('all')

  const shownProducts = sampleProducts.filter(product =>
    filterChoice === 'all' || product.category === filterChoice
  )

  const filterChange = (e) => {
    filterFunction(e.target.value)
  }

  const [currentItems, additems] = useState([])

  const addItems = (item) => {
    additems([...currentItems, item])
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle />

      <label>Filter by Category: </label>
      <select onChange={filterChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList sampleProducts={shownProducts} addItems={addItems}/>

      <Cart currentItems={currentItems}/>
    </div>
  )
}

export default App
