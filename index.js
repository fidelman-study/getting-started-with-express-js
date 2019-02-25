 const express = require('express')
 const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World 🚀')
})

app.get('/yo', (_req, res) => {
  res.send('YO 🔥')
})

const server = app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${server.address().port}`)
})