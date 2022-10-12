import Results from "./Results"
import { useState } from "react"

const TypingWindow = () => {
    const [userInput, setUserInput] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    const [isStarted, setIsStarted] = useState(false)

    const handleChange = (event) => {
        if(!isStarted) {
            setTimeout(() => {
                setIsDisabled(true)
            }, 3_000)
            setIsStarted(true)
        }
        const { value } = event.target
        setUserInput(value)
    }

    return (
        <div>
            <h1>Typing Test</h1>
            <textarea
                onChange={handleChange}
                rows="10"
                cols="100"
                disabled={isDisabled}
            ></textarea>
            { isDisabled && <Results wordsPerMinute={userInput.trim().split(" ").length} /> }
        </div>
    )
}

export default TypingWindow