const routes = require('./apiRoutes') //use api routes to route to use /api
const express = require('express') //bring express into the project
const app = express()

app.use(express.json()) //we want anything returned to the body, including errors to be json, not text or html
app.use('/api', apiRoutes) //must have /api in the path or api will not work

