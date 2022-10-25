import './App.css'
import Header from './components/Header'
import Transaction from './components/Transaction'
// import data from "./data/data.json"
import { useEffect, useState } from 'react'

const App = () => {
    const [isAddingTransaction, setIsAddingTransaction] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [currentId, setCurrentId] = useState(0)
    const [balance, setBalance] = useState(0)
    const defaultFormData = {
        id: null,
        amount: 0,
        description: "",
        type: "deposit",
        isPending: false,
    }
    const [formData, setFormData] = useState(defaultFormData)

    const handleToggle = () => {
        setIsAddingTransaction(prevIsAddingTransaction => !prevIsAddingTransaction)
    }

    useEffect(() => {
        setBalance(transactions.reduce((accumulator, transaction) => {
            if (transaction.type === "withdrawal") {
                return accumulator - Number(transaction.amount)
            } else {
                return accumulator + Number(transaction.amount)
            }
        }, 0
        ))
    }, [transactions])

    useEffect(() => {
        console.log(transactions)
    })

    const handleChange = (event) => {
        const { value, name, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    const addTransaction = () => {
        setCurrentId(prevId => prevId + 1)
        setTransactions(prevTransactions => {
            return [...prevTransactions, { ...formData, id: currentId }]
        })
        setFormData(defaultFormData)
    }

    return (
        <div>
            <Header balance={balance} />
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
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter a description..."
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="amount"
                            placeholder="Enter an amount in USD"
                            onChange={handleChange}
                            value={formData.amount}
                        />
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="deposit">Deposit</option>
                            <option value="withdrawal">Withdrawal</option>
                        </select>
                        <label>
                            Pending?
                            <input
                                name="isPending"
                                type="checkbox"
                                onChange={handleChange}
                                value={formData.isPending}
                            />
                        </label>
                        <button
                            className="btn btn-primary"
                            onClick={addTransaction}
                        >Add Transaction</button>
                    </div>
                )
            }

            {transactions.map((item) => {
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
