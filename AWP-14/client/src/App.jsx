import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useRef } from 'react'

function App() {
  const [data, setData] = useState([])
  const [randomNumbers, setRandomNumbers] = useState([Math.random()])
  const canvasRef = useRef(null)

  const fetchData = async () => {
    const rawData = await fetch("http://localhost:3000")
    const jsonData = await rawData.json()
    setData(jsonData.people)
  }

  const fetchNum = async () => {
    const rawNum = await fetch("http://localhost:3000/number")
    const jsonNum = await rawNum.json()
    setRandomNumbers(prevRandomNumbers => {
      return [...prevRandomNumbers, jsonNum.randomNumber].splice(-100)
    })
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
    const intervalId = setInterval(fetchNum, 300)

    return () => {
      clearInterval(intervalId)
    }

  }, [])

  useEffect(() => {
    const ctx = canvasRef.current

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: randomNumbers.map((number, index) => index),
        datasets: [{
          label: '# of Votes',
          data: randomNumbers,
          borderWidth: 1
        }]
      },
      options: {
        animation: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

    return () => {
      myChart.destroy()
    }
  }, [randomNumbers])

  return (
    <>
      {data.map((datum, index) => {
        return <p key={index}>{datum}</p>
      })}
      <button onClick={() => addNewName("Caeden")}>Add New Name!</button>
      <button onClick={() => removeName("Caeden")}>Remove Caeden</button>
      <div>
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  )
}

export default App
