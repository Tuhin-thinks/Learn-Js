import React from "react";

// import components
import Todo  from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo todos={filteredTodos} setTodos={setTodos} text={todo.text} todo={todo}/>
            ))}
            </ul>
        </div>
    );
}

export default TodoList;