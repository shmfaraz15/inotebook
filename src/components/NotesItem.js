import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function NotesItem(props) {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-2" onClick={() => {
                            deleteNote(note._id)
                            props.showAlert("Sucessfully Deleted", "success")
                        }}></i>
                        <i className="fa-solid fa-pen-to-square" onClick={() => {
                            updateNote(note)
                        }}></i>
                    </div>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat voluptates optio accusamus. Culpa qui natus sint quo quidem fuga ratione, ipsum quis iure! Atque omnis perspiciatis sapiente animi officiis.</p>
                </div>
            </div>
        </div>
    )
}
