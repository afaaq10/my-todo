import React from 'react'
import './Todos.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import knockSound from './knockSound.mp3'
import { useState } from 'react';
const Todos = ({ newTodo, todo, id, setTodo, input }) => {


    const [first, setfirst] = useState(false)
    const [input2, setInput2] = useState(newTodo)

    const handleChange = (e) => {
        setInput2(e.target.value)
    }


    const handleDelete = (idR) => {
        const audio = new Audio(knockSound);
        audio.play()
        setTodo(todo.filter((x) => x.id != idR))
    }

    const handleEdit = () => {


        if (!first)
            setfirst(!first)
        else {
            setfirst(!first)
            setTodo(todo.map((x) => x.id == todo.id ? {
                id: x.id,
                text: input2
            } : x))
        }

        const audio = new Audio(knockSound);
        audio.play()

    }

    return (
        <div className='todos'>


            {!first ? <div className="text"> {newTodo}</div> : <input className='edit_input' type="text" value={input2} onChange={handleChange}

            />}

            <div className="todos__edit">

                <div className="edit"><EditIcon onClick={handleEdit} /></div>
                <div> <DeleteIcon onClick={() => handleDelete(id)} /></div>

            </div>

        </div>
    )
}

export default Todos