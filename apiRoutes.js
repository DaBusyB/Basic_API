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

router.get('/contacts/:id', async (req, res, next) => {
    try {
        const contact = await records.getContact(req.params.id)

        if(contact) {
            res.json(contact)
        } else {
            res.status(404).json({message: "Quote not found"})
        }
    } catch(err) {
        next(err)
    }
    
})

// router.put('/contacts/:id', async (req, res, next) => {
//     try {
    //     const contact = await contacts.getContact(req.params.id)

    //     if(contact) {
    //         contact.contact = req.body.contact
    //         contact.position = req.body.position

    //         await records.updateContact(contact)
    //         res.status(204).end()
    //     } else {
    //         res.status(404).json({message: "Quote not found"})
    //     }
    // } catch(err) {
    //     next(err)
//}
// })

// router.post('/contacts', async (req, res, next) => {
//     try {

//     } catch(err) {
//         next(err)
//     }
// })

// router.delete('/contacts/:id', async (req, res, next) => {
//     try {

//     } catch(err) {
//          next(err)
//     }
// })

module.exports = router