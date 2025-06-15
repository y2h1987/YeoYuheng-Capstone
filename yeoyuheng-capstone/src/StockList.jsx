import { useEffect, useState } from "react";
import "./StockList.css";

function StockList({ stocks }) {

    const [stockCurrentPx, setstockCurrentPx] = useState({});



    useEffect(() => {
        if (stocks.length > 0) {
        const latest = stocks[stocks.length - 1].symbol;

        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${latest}&apikey=NCH7JGKG1WV574GD`)
            .then(response => response.json())
            .then(data =>
            setstockCurrentPx(prev => ({
                ...prev,
                [latest]: parseFloat(data["Global Quote"]["05. price"])
            }))
            );
        }
}, [stocks]);

    
  return (
    <ul className="stock-list">
      {stocks.length === 0 ? (
        <li>No stocks added yet.</li>
      ) : (
        stocks.map((stock, idx) => {

            const quantity = parseFloat(stock.quantity);
            const purchasePrice = parseFloat(stock.purchasePrice);
            const currentPrice = stockCurrentPx[stock.symbol];
            const profit =!isNaN(currentPrice) && !isNaN(purchasePrice) && !isNaN(quantity)? (currentPrice - purchasePrice) * quantity: null;

        return (
        <li key={idx} className="stock-item">
            <div className="stock-label">Symbol: {stock.symbol}</div>
            <div>Quantity: {quantity}</div>
            <div>Purchase Price: {purchasePrice}</div>
            <div>Current Price: {currentPrice}</div>
            <div className={profit >= 0 ? "profit" : "loss"}>Profic/Loss: {profit}</div>
        </li>
        )})
      )}
    </ul>
  );
}

export default StockList;
