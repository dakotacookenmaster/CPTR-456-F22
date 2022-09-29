import { useState } from "react"
import randomColor from "randomcolor"

const Block = (props) => {
    const { text } = props
    const [backgroundColor, setBackgroundColor] = useState(randomColor())
    console.log("Block (re)rendered")

    const handleClick = () => {
        setBackgroundColor(randomColor())
    }

    return (
        <div
            style={{ 
                width: "100px", 
                height: "100px", 
                background: backgroundColor, 
                cursor: "pointer" 
            }}
            onClick={handleClick}
        >
            { text }
        </div>
    )
}

export default Block