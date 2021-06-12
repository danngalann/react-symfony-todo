import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContext";
import {IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@material-ui/core";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function TodoTable() {
    const context = useContext(TodoContext);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Task
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TextField fullWidth={true} />
                    </TableCell>
                    <TableCell  align="right">
                        <IconButton>
                            <AddCircleIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
                {
                    context.todos.map(todo => (
                        <TableRow>
                            <TableCell>
                                {todo.title}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

export default TodoTable;