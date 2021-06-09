import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from "./js/context/TodoContext";
import TodoTable from "./js/components/TodoTable";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>
                <TodoTable />
            </TodoContextProvider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);