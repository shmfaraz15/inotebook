import { useState } from "react";
import NoteContex from "./noteContext";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    //get all notes
    const getNotes = async () => {
        const url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDNjZmMwNWEzZTk3ZDIxNTkwM2NkIn0sImlhdCI6MTY3NDM5NTkwMn0.pVrs_qMxmzDRz_7n87Tac7JVpYIoeQL1csZLPFbstQY'
            },

        });
        const json = await response.json();//notes array
        console.log(json)

        setNotes(json)
    }

    //add a Note
    const addNote = async (title, description, tag) => {
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDNjZmMwNWEzZTk3ZDIxNTkwM2NkIn0sImlhdCI6MTY3NDM5NTkwMn0.pVrs_qMxmzDRz_7n87Tac7JVpYIoeQL1csZLPFbstQY'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = await response.json();//added note object will be returned
        console.log(json)
        console.log("Adding a new note")

        setNotes(notes.concat(json))
    }

    //delete a note
    const deleteNote = async (id) => {
        const url = `${host}/api/notes/deletenote/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDNjZmMwNWEzZTk3ZDIxNTkwM2NkIn0sImlhdCI6MTY3NDM5NTkwMn0.pVrs_qMxmzDRz_7n87Tac7JVpYIoeQL1csZLPFbstQY'
            },
        });
        const json = await response.json();//notes array
        console.log(json)
        console.log("deleteting the node with id:" + id)
        const newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes)
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        const url = `${host}/api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDNjZmMwNWEzZTk3ZDIxNTkwM2NkIn0sImlhdCI6MTY3NDM5NTkwMn0.pVrs_qMxmzDRz_7n87Tac7JVpYIoeQL1csZLPFbstQY'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = await response.json();//notes array
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const note = newNotes[index];
            if (note._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag
                break;
            }
        }
        setNotes(newNotes)
    }
    return (
        <NoteContex.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContex.Provider>
    )
}

export default NoteState;