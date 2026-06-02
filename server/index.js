import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import recipeRouter from './routes/recipeRoutes.js'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api/recipes', recipeRouter)

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
