import { useState } from "react";
import NoteContex from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63cd561c3daa4f5e950611b7",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-01-22T15:28:28.979Z",
            "__v": 0
        },
        {
            "_id": "63cd5a113daa4f5e95061a1bf",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "New note updated",
            "description": "Please access the playlist updated",
            "tag": "personal",
            "date": "2023-01-22T15:45:21.495Z",
            "__v": 0
        },
        {
            "_id": "63cd5a123daa4df5e950611c1",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "New note updated",
            "description": "Please access the playlist updated",
            "tag": "personal",
            "date": "2023-01-22T15:45:22.169Z",
            "__v": 0
        },
        {
            "_id": "63cd5a113daa4f5ee950611bf",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "New note updated",
            "description": "Please access the playlist updated",
            "tag": "personal",
            "date": "2023-01-22T15:45:21.495Z",
            "__v": 0
        },
        {
            "_id": "63cd5a123daa4fr5e950611c1",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "New note updated",
            "description": "Please access the playlist updated",
            "tag": "personal",
            "date": "2023-01-22T15:45:22.169Z",
            "__v": 0
        },
        {
            "_id": "63cd5a113d5aa4f5e950611bf",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "New note updated",
            "description": "Please access the playlist updated",
            "tag": "personal",
            "date": "2023-01-22T15:45:21.495Z",
            "__v": 0
        },
        {
            "_id": "63cd5a123da6a4f5e950611c1",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": "New note updated",
            "description": "Please access the playlist updated",
            "tag": "personal",
            "date": "2023-01-22T15:45:22.169Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    //add a Note
    const addNote = (title, description, tag) => {
        //TODO:API call

        console.log("Adding a new note")
        const note = {
            "_id": "63cd5a123da6a4f5e950611c1",
            "user": "63cd3cfc05a3e97d215903cd",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-01-22T15:45:22.169Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //delete a note
    const deleteNote = (id) => {
        console.log("deleteting the node with id:" + id)
        const newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes)
    }

    //edit a note
    const editNote = () => {

    }
    return (
        <NoteContex.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContex.Provider>
    )
}

export default NoteState;