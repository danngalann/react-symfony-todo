import React, {Component, createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    create() {

    }

    read() {

    }

    update() {

    }

    delete() {

    }

    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.create.bind(this),
                readTodo: this.read.bind(this),
                updateTodo: this.update.bind(this),
                deleteTodo: this.delete.bind(this)
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;