import React from 'react'
import {Container, IconButton, Typography} from '@mui/material';
import {Cancel, Delete, DoneOutlineOutlined} from '@mui/icons-material';

function Todo({todo, markComplete, index, deleteOne, theme}) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid white',
    borderRadius: '5px',
    height: '100%' 
  }

  return (

    <Container style={containerStyle} >
        <IconButton onClick={()=> markComplete(index)} style={{color: '#50fa7b'}}>
            {/* cancel/done btns */}
            {todo.isDone? <Cancel></Cancel>:<DoneOutlineOutlined></DoneOutlineOutlined>}
        </IconButton>

        <Typography 
        style={
            theme === 'black' ? {color:'white'}:{}
        }
        >
            { <Typography 
                variant='h5'
                style={todo.isDone ? {textDecoration: 'line-through', color: 'grey'} :{} }
                > {todo.content}
             </Typography> }
        </Typography>
        

        <IconButton style={{color: '#ff5555'}} >
        <Delete onClick={()=>deleteOne(index)} ></Delete>
        </IconButton>   


    </Container>


    
  )
}

export default Todo
