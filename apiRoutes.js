const express = require('express')
const router = express.Router()
const apiRecords = require('./apiRecords')

router.get('/contacts', async (req, res, next) => {
    try {
        const contacts = await apiRecords.getContacts()
        res.json(contacts)
    } catch(err) {
        next(err)
    }
})

router.get('/contacts/:id', async (req, res, next) => {
    try {
        const contact = await apiRecords.getContact(req.params.id)

        if(contact) {
            res.json(contact)
        } else {
            res.status(404).json({message: "Quote not found"})
        }
    } catch(err) {
        next(err)
    }
})

router.put('/contacts/:id', async (req, res, next) => {
    try {
        const contact = await apiRecords.getContact(req.params.id)

        if(contact) {
            contact.contact = req.body.contact
            contact.position = req.body.position

            await apiRecords.updateContact(contact)
            res.status(204).end()
        } else {
            res.status(404).json({message: "Quote not found"})
        }
    } catch(err) {
        next(err)
    }
})

router.post('/contacts', async (req, res, next) => {
    try {
        if(req.body.contact && req.body.position) {
            const contact = await apiRecords.createContact({
                contact: req.body.contact, 
                position: req.body.position 
            })

            res.status(201).json(contact)
        } else {
            res.status(400).json({message: "Contact and position are required"})
        }
    } catch(err) {
        next(err)
    }
})

router.delete('/contacts/:id', async (req, res, next) => {
    try {
        const contact = await apiRecords.getContact(req.params.id)

        if(contact) {
            await apiRecords.deleteContact(contact)
            res.status(204).end()
        } else {
            res.status(404).json({message: "Contact not found"})
        }
    } catch(err) {
         next(err)
    }
})

module.exports = router
