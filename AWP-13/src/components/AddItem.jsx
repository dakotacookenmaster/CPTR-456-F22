import { IconButton, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'

const AddItem = () => {
    return (
        <div style={{ 
                display: "flex", 
                gap: "10px", 
                alignItems: "center" 
            }}>
            <TextField variant="outlined" placeholder="Add an item..." />
            <IconButton color="primary" variant="contained">
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default AddItem