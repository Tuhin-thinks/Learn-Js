import React from "react";

const Todo = ({todos, setTodos, text, todo}) => {
    // events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return {...el, completed: !todo.completed}
            }
            return el;
        }))
    };
    return (
        <div className="todo">
            <li id={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;