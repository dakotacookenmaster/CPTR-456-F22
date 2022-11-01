import { IconButton, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react"

const AddItem = ({ setItems }) => {
    const [input, setInput] = useState("")
    const [id, setId] = useState(0)

    const handleChange = (event) => {
        const { value } = event.target
        setInput(value)
    }

    const handleAddItem = () => {
        setItems(prevItems => {
            return [
                ...prevItems,
                {
                    id,
                    name: input,
                    isCompleted: false,
                }
            ]
        })
        setId(prevId => prevId + 1)
        setInput("")
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleAddItem()
        }
    }

    return (
        <div style={{ 
                display: "flex", 
                gap: "10px", 
                alignItems: "center" 
            }}>
            <TextField 
                value={input} 
                variant="outlined" 
                placeholder="Add an item..." 
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <IconButton 
                color="primary" 
                variant="contained"
                onClick={handleAddItem}
            >
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default AddItem