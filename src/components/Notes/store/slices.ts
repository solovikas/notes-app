import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { INote, INotesState } from "./types"

export const initialState: INotesState = {
  isEmpty: false,
  currentAmount: 0,
  notes: [],
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    currentAdd: state => {
      const newNote: INote = {
        id: Date.now().toString(),
        title: "",
        text: "",
      }
      state.notes.push(newNote)
      state.currentAmount++
    },
    currentClear: (state, action: PayloadAction<string>) => {
      const newNotes = state.notes.filter(note => note.id !== action.payload)
      if (newNotes.length < state.notes.length) {
        state.currentAmount = Math.max(0, state.currentAmount - 1)
      }
      state.notes = newNotes
    },
    updateNote: (
      state,
      action: PayloadAction<{ id: string; title: string; text: string }>,
    ) => {
      const { id, title, text } = action.payload

      const note = state.notes.find(note => note.id === id)
      if (note) {
        note.title = title
        note.text = text
      }
    },
    saveNotes: (state, action: PayloadAction<INote[]>) => {
      console.log("До:", action.payload)
      state.notes.push(
        ...action.payload.map(note => ({
          id: note.id,
          title: note.title,
          text: note.text,
        })),
      )
      state.currentAmount = state.notes.length
      console.log("После:", state.notes)
    },
  },
})

export const { currentAdd, currentClear, updateNote, saveNotes } =
  notesSlice.actions

export default notesSlice.reducer
