import './App.css'
// import Results from "./components/Results"
import TypingWindow from './components/TypingWindow'
import Parent from './components/Parent'
import Children from './components/Children'

const App = () => {

  return (
    <div className="App">
      {/* <TypingWindow /> */}
      <Parent>
        <div>
        <Children />
        <p>Hi there, I'm also a child, but just a normal JSX component part of the standard...</p>
        </div>
        <TypingWindow />
      </Parent>
    </div>
  )
}

export default App
