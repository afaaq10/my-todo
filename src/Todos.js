import React from 'react'
import './Todos.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import knockSound from './knockSound.mp3'
import { useState } from 'react';
const Todos = ({ newTodo, todo, id, setTodo }) => {


    const [first, setfirst] = useState(false)
    const [input2, setInput2] = useState(newTodo)

    const handleChange = (e) => {
        setInput2(e.target.value)
    }


    const handleDelete = (idR) => {
        const audio = new Audio(knockSound);
        audio.play()

        setTodo(todo.filter((x) => x.id != idR))
        alert("Note deleted successfully")

    }

    const handleEdit = () => {


        if (!first)
            setfirst(!first)
        else {
            setfirst(!first)
            setTodo(todo.map((x) => x.id
                == id ? {

                id: x.id,
                text: input2
            } : x))
            alert("Note edited successfully")

        }


        const audio = new Audio(knockSound);
        audio.play()

    }

    return (
        <div className='todos'>

            <div className="todos__wrap">
                {!first ? <div className="text"><p> {newTodo}</p></div> : <input className='edit_input' type="text" value={input2} onChange={handleChange}

                />}
            </div>
            <div className="todos__edit">

                <div className="edit"><EditIcon onClick={handleEdit} /></div>
                <div className="edit2"> <DeleteIcon onClick={() => handleDelete(id)} /></div>

            </div>

        </div>
    )
}

export default Todos