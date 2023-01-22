import { useState } from "react";
import NoteContex from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Harry",
        "class": "5b"
    }

    const [state, setState] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Larry",
                "class": "10b"
            })
        }, 2000);
    }
    return (
        <NoteContex.Provider value={{ state: state, update: update }}>
            {props.children}
        </NoteContex.Provider>
    )
}

export default NoteState;