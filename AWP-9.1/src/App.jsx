import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return prevTheme === "light" ? "dark" : "light"
    })
  }

  return (
    <div className={theme === "dark" ? "app-dark" : "app-light"}>
      <Nav theme={theme} />
      <button onClick={toggleTheme}>{ theme === "dark" ? "Change to Light Theme!" : "Change to Dark Theme"}</button>
    </div>
  )
}

export default App
