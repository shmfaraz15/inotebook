import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NotesItem from './NotesItem'
export default function Notes() {

    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        refModal.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const refModal = useRef(null)
    const refClose = useRef(null)

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updateClickHandler = (e) => {
        console.log("Updating the note:", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={refModal} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={updateClickHandler}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h1>Your Notes</h1>
                <div className='container'>
                    {notes.length === 0 && 'No Notes to display'}
                </div>
                {notes.map((note) => {
                    return <NotesItem note={note} key={note._id} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}
