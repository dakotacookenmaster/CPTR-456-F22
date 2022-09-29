import { useState } from 'react'
import './App.css'
import Block from './components/Block'
import Toggle from './components/Toggle'

function App() {
  const [characterCount, setCharacterCount] = useState(0)

  console.log("App (re)rendered")

  const handleChange = (event) => {
    const { value } = event.target
    const totalLength = value.length
    setCharacterCount(totalLength)
    console.log(characterCount)
  }

  return (
    <div>
      <input type="text" placeholder="Type here..." onChange={handleChange} />
      <p>Number of characters: { characterCount }</p>
      <Toggle />
      {
        [...new Array(5)].map((_, index) => {
          return <Block key={index} text={characterCount} />
        })
      }
    </div>
  )
}

export default App
