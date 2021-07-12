// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import './App.css';
//importing componenets
import Form from "./components/form";
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);  // we need to store array object here.
  const [status, setStatus] = useState('all');
  const [filteredTodos, setfilteredTodos] = useState([]);
  
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);

    }
  }

  // use effect
  useEffect(
    () => {
    filterHandler();
  }, [todos, status]
  );
  const getLocalTodos = () => {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  useEffect(
    ()=>{
      getLocalTodos();
    }, []
  );
  useEffect(
    ()=>{
      saveLocalTodos();
    }, [todos]
  );

    return ( <
        div className = "App">
          <header>
            <h1>Tuhin's Todo list</h1>
          </header>
          <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} status={status} setStatus={setStatus}/>
          <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}></TodoList>
        </div>
    );
}

export default App;