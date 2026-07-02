const express = require("express")

const app = express();
app.use(express.json())

const notes = [] 

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201).send("Note added successfully")
})

app.get("/notes", (req, res) => { 
    res.status(200).json(notes)
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[index]

    res.status(200).send("Note deleted successfully")
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const title = req.body.title
    const description = req.body.description

    notes[index].title = title
    notes[index].description = description

    res.status(200).send("Note updated successfully")
})

module.exports = app;