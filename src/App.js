import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import { Typography } from '@mui/material';

function App() {

  const [theme, setTheme] = useState('white')

  function toodleTheme() {
    if(theme === 'white') setTheme(document.body.style.background = 'black')
    if (theme === 'black') setTheme(document.body.style.background = 'white')
      
  }

  const [todos, setTodos] = useState(
    !localStorage.getItem('todos-list') ? []
    : JSON.parse(localStorage.getItem('todos-list'))
  );

  useEffect(()=>{
    localStorage.setItem('todos-list', JSON.stringify(todos))
  }, [todos])
  function addTodo(newItem) {
    //adding a new item
    setTodos([...todos, newItem])
  }

  function markComplete(index) {
    todos[index].isDone = !todos[index].isDone

    setTodos([...todos]);
  }

  function deleteOne(index) {
    todos.splice(index, 1)

    //set it back to itself after deleting the one doto
    setTodos([...todos])
  }

  function deleteCompleted() {
    setTodos(todos.filter((todo)=> todo.isDone === false))
  }
  const appStyle = ['App', theme].join(' ');

  // console.log(appStyle);

  return (
    <div className={appStyle} >
        <button onClick={toodleTheme}>Change Theme</button>
        <style>
          
        </style>

        <Typography variant='h4' style={theme === 'black' ? {color:'white'}:{} } > To do or not to do </Typography>

        <br />
        <h1>🧐👇</h1>
        <br />
        <div>
          {todos.map((todo, index)=>{
            return <Todo 
                key={index} todo={todo} index={index} markComplete={markComplete}
                deleteOne={deleteOne}
                appStyle={appStyle}
                theme={theme}
                />
          })}
        </div>
        <br />

        <Form addTodo={addTodo} deleteCompleted={deleteCompleted} theme={theme} />

    </div>
  );
}

export default App;
