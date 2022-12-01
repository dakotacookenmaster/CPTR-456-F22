import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const rawData = await fetch("http://localhost:3000")
    const jsonData = await rawData.json()
    setData(jsonData.people)
  }

  const addNewName = async (name) => {
    const rawData = await fetch("http://localhost:3000", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ name: name })
    })
    const jsonData = await rawData.json()
    setData(jsonData.people)
  }

  const removeName = async (name) => {
    const rawData = await fetch("http://localhost:3000", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify({ name: name })
    })
    const jsonData = await rawData.json()
    setData(jsonData.people)
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {data.map((datum, index) => {
        return <p key={index}>{datum}</p>
      })}
      <button onClick={() => addNewName("Caeden")}>Add New Name!</button>
      <button onClick={() => removeName("Caeden")}>Remove Caeden</button>
    </>
  )
}

export default App
