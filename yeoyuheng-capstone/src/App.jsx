import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div> 
        <img src="/src/assets/financelogo.png" className="Finance Logo" alt="Finance logo" />
        <h1>Finance Dashboard</h1>
        <form class="my-form">
          <input type ="text" placeholder='Stock Symbol' />
          <input type ="number" placeholder='Quantity' />
          <input type = "float" placeholder='Purchase Price' />
          <button type='submit'>Add Stock </button>
        </form>
      </div>

      <div> 
        <h2>Stock List</h2>
        <p>No stocks added yet.</p>
      </div>
    </>
  )
}

export default App
