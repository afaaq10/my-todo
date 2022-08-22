import { useState } from 'react';
import './App.css';
import Todos from './Todos';
import Button from '@mui/material/Button';
import knockSound from './knockSound.mp3';
import 'animate.css';





function App() {

  setTimeout(() => {

    document.getElementById('h1').innerHTML = " "

  }, 2000);






  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])


  const handleInput = (e) => {
    setInput(e.target.value)
  }


  const handleAdd = () => {
    if (!input) {
      alert("Please add a note first")
    }
    else {
      setTodo([...todo, { id: Date.now(), text: input }])
      setInput("")
    }
    const audio = new Audio(knockSound);
    audio.play()

  }

  const removeAll = () => {
    const audio = new Audio(knockSound);
    audio.play()
    setTodo([])

  }
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      if (!input) {
        alert("Please add a note first")
      }
      else {
        setTodo([...todo, { id: Date.now(), text: input }])
        setInput("")
      }
      const audio = new Audio(knockSound);
      audio.play()


    }

  }





  return (
    <div className="App">
      <h1 id="h1" className="animate__animated  animate__backInUp" style={{ textAlign: "center", color: "pink" }}>Hey! Welcome</h1>
      <img style={{ width: "110px", display: "flex", margin: "auto" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEK3wdUPsd4E2REc2j9G7A7CIUEE6FhjtHQ&usqp=CAU" alt="image" />



      <div className="App__inbut">
        <input className='input1' type="text" placeholder='Add your new task' onChange={handleInput} value={input} onKeyDown={handleEnter} />

        <div className="add"><Button onClick={handleAdd} variant="contained">Add</Button></div>
      </div>



      {todo.map((x) => <Todos newTodo={x.text} id={x.id} todo={todo} setTodo={setTodo} input={input} />)}


      {todo.length != 0 &&
        <div className="remove_button"> <Button onClick={removeAll} variant="contained" color="error">Remove all</Button></div>}

    </div>


  );
}

export default App;


