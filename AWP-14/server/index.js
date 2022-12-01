import express from 'express'
const app = express()
import cors from "cors"
const port = 3000

app.use(cors())
app.use(express.json())

let items = [
    "Adrian",
    "Bryan",
    "Esther",
    "Meg",
]

let randomNumber = 0
let goingUp = true

setInterval(() => {
  if(randomNumber < 100 && goingUp) {
    randomNumber++
  } else if(randomNumber === 100) {
    goingUp = false
    randomNumber--
  } else if(randomNumber > 0 && !goingUp) {
    randomNumber--
  } else {
    goingUp = true
  }
}, 100)

app.get('/', (req, res) => {
  res.json({
    people: items
  })
})

app.post("/", (request, response) => {
    const { name } = request.body
    items.push(name)
    response.status(201)
    response.json({
        people: items
    })
})

app.delete("/", (request, response) => {
  const { name } = request.body
  let foundOne = false
  items = items.filter(item => {
    if(!foundOne) {
      if(item === name) {
        foundOne = true
        return false
      }
    }
    return true
  })
  response.json({
    people: items
  })
})


app.get("/number", (request, response) => {
  response.json({
    // randomNumber: randomNumber
    randomNumber
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})