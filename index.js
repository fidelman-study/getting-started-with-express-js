 const express = require('express')
 const app = express()

 const fs = require('fs')
 const _ = require('lodash')
 const users = []

 fs.readFile('users.json', { encoding: 'utf8' }, (err, data) => {
   if (err) throw err

   JSON.parse(data).forEach(user => {
     user.name.full = _.startCase(`${user.name.first} ${user.name.last}`)
     users.push(user)
   })
 })

 app.get('/', (_req, res) => {
  let buffer = ''

  users.forEach(user => {
    buffer += `<a href="/user/${user.username}">${user.name.full}</a><br>`
  })

  res.send(buffer)
})

app.get(/big.*/, (_req, _res, next) => {
  console.log('It is very big 💪')
  next()
})

app.get('/user/:username', (req, res) => {
  const { username } = req.params
  const user = users.find(user => user.username === username)

  const userHMTL = `
    <h1>${user.name.title} ${user.name.full}</h1>
  `

  res.send(userHMTL)
})

const server = app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${server.address().port}`)
})