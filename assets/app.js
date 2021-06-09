import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from "./js/context/TodoContext";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>

            </TodoContextProvider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);