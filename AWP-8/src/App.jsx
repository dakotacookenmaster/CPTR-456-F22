import './App.css'
import data from "./data/data.json"
import Video from './components/Video'

const App = () => {
  return (
    <div className="videoContainer">
      {
        data.map((video, index) => {
          return (
            <Video 
              key={video.id} 
              picture={video.picture} 
              avatar={video.avatar}
              name={video.name}
              time={video.time}
              date={video.date}
            />
          )
        })
      }
    </div>
  )
}

export default App
