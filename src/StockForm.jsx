import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StockList from './StockList';



function App() {
  

    
    const [stockSymbol, setstockSymbol] = useState([]); 
    const [stockQuantity, setstockQuantity] = useState([]); 
    const [stockPurchasePx, setPurchasePx] = useState([]); 
    const [stockList, setStockList] = useState([]);


    function handlestockSymbol(event) {
        setstockSymbol(event.target.value);
        console.log("StockSymbol: ", event.target.value);
    }

    function handlestockQuantity(event) {
        setstockQuantity(event.target.value);
        console.log("StockQuantity: ", event.target.value);
    }

    function handlePurchasePx(event) {
        setPurchasePx(event.target.value);
        console.log("PurchasePx: ", event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        const stockData = {
            symbol: stockSymbol.toUpperCase(),
            quantity: parseInt(stockQuantity),
            purchasePrice: parseFloat(stockPurchasePx),
        }
            setStockList([...stockList, stockData]);

        // Reset form
        setstockSymbol('');
        setstockQuantity('');
        setPurchasePx('');
    }


    return (
    <>
        <div> 
        <img src="/assets/financelogo.png" className="Finance Logo" alt="Finance logo" />
        <h1>Finance Dashboard</h1>
        <form class="my-form" onSubmit={handleSubmit}>
            <input type ="text" placeholder='Stock Symbol' value={stockSymbol} onChange={(handlestockSymbol)} />
            <input type ="number" placeholder='Quantity'  value={stockQuantity} onChange={(handlestockQuantity)} />
            <input type = "float" placeholder='Purchase Price'  value={stockPurchasePx} onChange={(handlePurchasePx)} />


            <button type='submit'>Add Stock </button>
        </form>
        </div>

        <div> 
            <h2>Stock List</h2>
            <StockList stocks={stockList} />
        </div>
    </>
    )
}

export default App
