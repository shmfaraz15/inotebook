import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "deafult" })
    const clickHandler = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container my-3'>
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={clickHandler}>Submit</button>
                </form>
            </div>
        </>
    )
}
