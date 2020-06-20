const express = require('express')
const router = express.Router()
const records = require('./apiRecords')

router.get('/contacts', async (req, res, next) => {
    try {
        const contacts = await records.getContacts()
        res.json(contacts)
    } catch(err) {
        next(err)
    }
})

// router.get('/contacts/:id', async (req, res) = {
//     try {

//     } catch() {
        
//     }
// })

// router.put('/contacts/:id', async (req, res) = {
//     try {

//     } catch() {
        
//     }
// })

// router.post('/contacts', async (req, res) = {
//     try {

//     } catch() {
        
//     }
// })

// router.delete('/contacts/:id', async (req, res) = {
//     try {

//     } catch() {
        
//     }
// })

module.exports = router