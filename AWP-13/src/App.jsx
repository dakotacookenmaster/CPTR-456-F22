import './App.css'
import AddItem from './components/AddItem'
import Navbar from './components/Navbar'
import ListItem from './components/ListItem'
import { useState } from 'react'

const App = () => {
    const [items, setItems] = useState([])
    return (
        <div style={{
            width: "100%",
        }}>
            <Navbar />
            <div style={{ padding: "10px" }}>
                <AddItem setItems={setItems} />
                <div style={{ paddingTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {
                        items.map(item => {
                            return <ListItem 
                                name={item.name} 
                                isCompleted={item.isCompleted} 
                                key={item.id}
                                id={item.id}
                                setItems={setItems}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App
