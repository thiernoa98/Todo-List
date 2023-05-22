import { RemoveDone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react'

function Form({addTodo, deleteCompleted, theme}) {
  const [formValue, setFormValue] = useState({
    content: "",
    isDone: false
  })

  function handleSubmit(e) {
    e.preventDefault();

    //adding the new input (todo into the todo list)
    addTodo(formValue);

    //reset 
    setFormValue({content: "", isDone: false})
  }

  function handleOnChange(e){ 
    setFormValue({ ...formValue, content: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} >
        <label 
        style={ 
            (theme === 'black'? {color: 'white', fontSize: '1rem', fontWeight: 'bold'}
            : {fontSize: '1rem', fontWeight: 'bold'})}
         >
            Enter Task </label> 
            
        <input 
        type="text" 
        value={formValue.content}
        onChange={handleOnChange} 
        />

        <IconButton variant='contained' onClick={deleteCompleted} >
            <RemoveDone style={{color: 'red'}} ></RemoveDone>
        </IconButton>
    </form>
  )
}

export default Form
