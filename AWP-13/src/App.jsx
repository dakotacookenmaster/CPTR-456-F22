import './App.css'
import AddItem from './components/AddItem'
import Navbar from './components/Navbar'
import ListItem from './components/ListItem'

const App = () => {
    return (
        <div style={{
            width: "100%",
        }}>
            <Navbar />
            <div style={{ padding: "10px" }}>
                <AddItem />
                <div style={{ paddingTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <ListItem name={"Laundry"} isCompleted={false} />
                    <ListItem name={"Groceries"} isCompleted={true} />
                    <ListItem name={"Hamster"} isCompleted={false} />
                </div>
            </div>
        </div>
    )
}

export default App
