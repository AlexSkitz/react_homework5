import React from 'react'
import ToDoList from './ToDoList'
import ToDoContentHeader from './ToDoContentHeader'

function ToDo() {
    return (
        <div className="card-group">
            <ToDoList />
            <ToDoContentHeader />
        </div>
    )
}

export default ToDo;