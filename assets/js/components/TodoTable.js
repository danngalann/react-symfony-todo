import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContext";

function TodoTable() {
    const context = useContext(TodoContext);

    return (
        <ul>
            {
                context.todos.map(todo => {
                    return <li>{todo.title}</li>
                })
            }
        </ul>
    );
}

export default TodoTable;