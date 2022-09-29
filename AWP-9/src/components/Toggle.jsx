import { useState } from "react"

const Toggle = () => {
    const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn(prevIsOn => {
            return !prevIsOn
        })
    }

    return (
        <button onClick={handleToggle}>{ isOn ? "On" : "Off" }</button>
    )
}

export default Toggle