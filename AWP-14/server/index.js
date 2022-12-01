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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})