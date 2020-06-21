const apiRoutes = require('./apiRoutes') //use api routes to route to use /api
const express = require('express') //bring express into the project
const app = express()

app.use(express.json()) //we want anything returned to the body, including errors to be json, not text or html
app.use('/api', apiRoutes) //must have /api in the path or api will not work

app.use((req, res, next) => { //response to queries that dont exist
    const err = new Error("Not found")
    err.status(404)
    next(err)
})

app.use((err, req, res, next) => { //error handler
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

const port = 3001
app.listen(port, () => console.log(`Contacts API is listening on port ${port}`))