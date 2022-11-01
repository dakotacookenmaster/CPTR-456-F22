import { IconButton, Paper, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'

const ListItem = (props) => {
    const { name, isCompleted, setItems, id } = props

    const handleToggleComplete = () => {
        setItems(prevItems => {
            return prevItems.map(i => {
                if (i.id === id) {
                    return {
                        ...i,
                        isCompleted: !i.isCompleted,
                    }
                }

                return i
            })
        })
    }

    const handleRemove = () => {
        setItems(prevItems => {
            return prevItems.filter(i => i.id !== id)
        })
    }

    return (
        <Paper
            elevation={3}
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
        >
            <Typography variant="h3" component="div" style={{
                textDecoration: isCompleted ? "line-through" : "none"
            }}>
                {name}
            </Typography>
            <div style={{ marginLeft: "auto" }}>
                <IconButton onClick={handleToggleComplete}>
                    <CheckIcon />
                </IconButton>
                <IconButton onClick={handleRemove}>
                    <RemoveIcon />
                </IconButton>
            </div>
        </Paper>
    )
}

export default ListItem