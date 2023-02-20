import React from 'react'

export default function NotesItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat voluptates optio accusamus. Culpa qui natus sint quo quidem fuga ratione, ipsum quis iure! Atque omnis perspiciatis sapiente animi officiis.</p>
                </div>
            </div>
        </div>
    )
}
