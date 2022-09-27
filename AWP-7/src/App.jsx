import './App.css'
import Block from './components/Block'

const App = () => {
  return (
    <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
      {
        [...new Array(1000)].map((_, index) => {
          return (
            <Block key={index} color={index % 2 == 0 ? "blue" : "gray"} />
          )
        })
      }
    </div>
  )
}

export default App
