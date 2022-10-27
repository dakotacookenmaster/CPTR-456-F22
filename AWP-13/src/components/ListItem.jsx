import { IconButton, Paper, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'

const ListItem = (props) => {
    const { name, isCompleted } = props
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
            <IconButton>
                <CheckIcon />
            </IconButton>
            <IconButton>
                <RemoveIcon />
            </IconButton>
            </div>
        </Paper>
    )
}

export default ListItem