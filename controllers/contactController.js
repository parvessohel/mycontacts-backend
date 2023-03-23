const asyncHandler = require("express-async-handler")

const getContacts = asyncHandler(async, (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
})


const createContact = asyncHandler(async, (req, res) => {
    console.log(req.body)

    const { name, email } = req.body

    if (!name || !email) {
        res.status(400)
        throw new Error("There is no name or email idiot!!")

    }
    res.status(201).json({ message: "Create Contacts" })

})

const getContact = asyncHandler(async, (req, res) => {
    res.status(200).json({ message: `Get Contact for${req.params.id}` })
})

const updateContact = asyncHandler(async, (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
})

const deleteContact = asyncHandler(async, (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` })
})

module.exports = { getContact, createContact, getContacts, updateContact, deleteContact }