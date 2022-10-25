import './App.css'
import Header from './components/Header'
import Transaction from './components/Transaction'
import data from "./data/data.json"
import { useState } from 'react'

const App = () => {
    const [isAddingTransaction, setIsAddingTransaction] = useState(false)

    const handleToggle = () => {
        setIsAddingTransaction(prevIsAddingTransaction => !prevIsAddingTransaction)
    }

    return (
        <div>
            <Header />
            <div className="transaction-group">
                <h1>Transactions</h1>
                <i 
                    className="bi bi-plus-square-fill add-transaction"
                    onClick={handleToggle}
                ></i>
            </div>

            {
                isAddingTransaction && (
                    <div className="add-transaction-form">
                        <input type="text" name="description" />
                        <input type="number" name="amount" />
                        <select>
                            <option value="deposit">Deposit</option>
                            <option value="withdrawal">Withdrawal</option>
                        </select>
                        <label>
                            Pending?
                            <input type="checkbox"></input>
                        </label>
                        <button className="btn btn-primary">Add Transaction</button>
                    </div>
                )
            }

            {data.map((item) => {
                return (
                    <Transaction
                        amount={item.amount}
                        description={item.description}
                        isPending={item.isPending}
                        type={item.type}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}

export default App
