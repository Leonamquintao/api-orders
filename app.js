'use strict'

const server = require('./src/server')
const app = server()
const port = process.env.port || 5000

app.listen(port, () => console.log(`Server running on PORT ${port}`))