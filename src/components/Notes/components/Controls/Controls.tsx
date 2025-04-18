import {
  currentAdd,
  currentClear,
  updateNote,
  saveNotes,
} from "../../store/slices"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { useEffect, useState } from "react"
import { INote } from "../../store/types"

const Controls: React.FC = () => {
  const state = useAppSelector(state => state.notes.notes)
  const stateForAmount = useAppSelector(state => state.notes)

  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("Состояние заметок изменилось:", state)
  }, [state])

  const handleAddNote = () => {
    dispatch(currentAdd())
  }

  const handleNoteTitleChange = (id: string, title: string) => {
    dispatch(
      updateNote({
        id,
        title,
        text: state.find(note => note.id === id)?.text || "",
      }),
    )
  }

  const handleNoteTextChange = (id: string, text: string) => {
    dispatch(
      updateNote({
        id,
        title: state.find(note => note.id === id)?.title || "",
        text,
      }),
    )
  }

  const handleClearNote = (id: string) => {
    dispatch(currentClear(id))
  }

  const handleSaveNotes = async () => {
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })

      if (!response.ok) {
        throw new Error(`Ошибка отправки запроса: ${response.status}`)
      }

      const data = await response.json()
      console.log("Заметки успешно сохранены:", data)
    } catch (error) {
      console.error("Ошибка при сохранении заметок:", error)
    }
  }

  const handleDeleteNote = async (id: string) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Ошибка отправки запроса: ${response.status}`)
      }

      console.log("Заметка удалена успешно:", response.status)
      handleClearNote(id)
    } catch (error) {
      console.error("Ошибка при удалении заметки:", error)
    }
  }

  const handleLoadNotes = async () => {
    try {
      const response = await fetch("/api/notes")

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`)
      }

      const notes = await response.json()

      dispatch(
        saveNotes(
          notes.filter(
            (newNote: INote) =>
              !state.some(
                (existingNote: INote) => existingNote.id === newNote.id,
              ),
          ),
        ),
      )
    } catch (error) {
      console.error("Ошибка при загрузке заметок:", error)
    }
  }

  const handleUpdateNotes = () => {
    console.log("Функция вызвана")
  }

  return (
    <div className="w-full h-fit flex-grow flex-col justify-start items-start rounded-[0.6vw] overflow-hidden overflow-y-scroll max-sm:overflow-y-hidden">
      <div className="flex flex-row w-full h-fit justify-end gap-[3vw] overflow-hidden bg-gray-100 p-[2vw] rounded-t-[0.6vw] border-b-2 border-l-2 border-r-2 max-sm:grid max-sm:grid-rows-4 max-sm:grid-cols-1 max-sm:justify-items-center max-sm:gap-[2vw]">
        <button className="text-white bg-[var(--dark-grey)] font-bold w-auto h-[4vw] aspect-square text-[1.4vw] rounded-[0.6vw] font-mulish max-lg:h-[5vw] max-sm:text-[3.2vw] max-sm:h-[8vw] overflow-hidden">
          {stateForAmount.currentAmount}
        </button>
        <button
          className="text-white bg-[var(--blue)] font-bold w-[16vw] h-[4vw] text-[1.4vw] rounded-[0.6vw] font-mulish max-lg:w-[18vw] max-lg:h-[5vw] max-sm:text-[3.2vw] max-sm:w-[56vw] max-sm:h-[8vw] cursor-pointer overflow-hidden"
          onClick={handleAddNote}
        >
          Добавить заметку
        </button>
        <button
          className="text-white bg-[var(--blue)] font-bold w-[12vw] h-[4vw] text-[1.4vw] rounded-[0.6vw] font-mulish max-lg:w-[14vw] max-lg:h-[5vw] max-sm:text-[3.2vw] max-sm:w-[56vw] max-sm:h-[8vw] cursor-pointer overflow-hidden"
          onClick={handleSaveNotes}
        >
          Сохранить
        </button>

        <button
          className="text-white bg-[var(--blue)] font-bold w-[16vw] h-[4vw] text-[1.4vw] rounded-[0.6vw] font-mulish max-lg:w-[18vw] max-lg:h-[5vw] max-sm:text-[3.2vw] max-sm:w-[56vw] max-sm:h-[8vw] cursor-pointer overflow-hidden"
          onClick={handleLoadNotes}
        >
          Загрузить заметки
        </button>
      </div>
      {stateForAmount.currentAmount === 0 ? (
        <div className="font-montserrat w-full h-auto justify-center text-[var(--dark-grey)] text-center mt-[2v]">
          Заметки отсутствуют. Добавьте новую или загрузите существующие с
          сервера, если они уже созданы.
        </div>
      ) : (
        ""
      )}
      {state.map(note => (
        <div
          key={note.id}
          className="w-full h-fit flex flex-row justify-start items-start bg-gray-100 text-[var(--dark-grey)] p-[2vw] gap-[2vw] overflow-hidden border-b-2 border-l-2 border-r-2"
        >
          <div className="flex flex-col h-fit w-[80%] gap-[1vw] justify-center items-start">
            <input
              type="text"
              value={note.title}
              onChange={e => {
                handleNoteTitleChange(note.id, e.target.value)
              }}
              placeholder="Название..."
              className="flex-grow h-[4vw] max-lg:h-[5vw] max-sm:h-[12vw] w-[60%] text-[1.4vw] max-sm:text-[3.6vw] border-2 rounded-[0.6vw] p-[1vw] focus:border-[var(--orange)] focus:border-2 focus:outline-none overflow-hidden"
            />
            <textarea
              value={note.text}
              onChange={e => {
                handleNoteTextChange(note.id, e.target.value)
              }}
              placeholder="Текст заметки..."
              className="flex-grow h-[4vw] max-lg:h-[5vw] max-sm:h-[12vw] w-full resize-none text-[1.4vw] max-sm:text-[3.6vw] border-2 rounded-[0.6vw] p-[1vw] focus:border-[var(--orange)] focus:border-2 focus:outline-none overflow-hidden"
            />
          </div>
          <div className="flex flex-col w-auto h-full flex-grow">
            <button
              onClick={() => {
                handleClearNote(note.id)
              }}
              className="w-fit text-[1.4vw] max-sm:text-[3.2vw]"
            >
              Очистить
            </button>
            <button
              onClick={() => {
                handleDeleteNote(note.id)
              }}
              className="w-fit text-[1.4vw] max-sm:text-[3.2vw]"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Controls
