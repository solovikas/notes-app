import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

let notes = []

app.get("/api/notes", (req, res) => {
  res.json(notes)
})

app.post("/api/notes", (req, res) => {
  const notesArray = req.body

  notes = notes.map(note => {
    const updatedNote = notesArray.find(arrayNote => arrayNote.id === note.id)
    console.log(updatedNote)

    if (updatedNote) {
      return {
        ...note,
        title: updatedNote.title,
        text: updatedNote.text,
      }
    }

    return note
  })

  notesArray.forEach(newNote => {
    if (!notes.some(existingNote => existingNote.id === newNote.id)) {
      notes.push(newNote)
    }
  })

  res.status(200).json({ message: "Заметки сохранены", notes })
})

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id

  const beforeLength = notes.length
  notes = notes.filter(note => note.id !== id)

  if (beforeLength > notes.length) {
    res.status(200).json({ message: "Заметка удалена успешно" })
  } else {
    res.status(404).json({ message: "Заметка не найдена" })
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
