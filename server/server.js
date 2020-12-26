const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
 
app.get('/api/hello', function (req, res) {
  res.json({msg: 'Hello World'})
})
 
app.listen(8081)
