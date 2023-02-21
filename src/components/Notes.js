import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NotesItem from './NotesItem'
export default function Notes() {

    const context = useContext(noteContext)
    const { notes } = context

    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NotesItem note={note} key={note._id} />
                })}
            </div>
        </>
    )
}
