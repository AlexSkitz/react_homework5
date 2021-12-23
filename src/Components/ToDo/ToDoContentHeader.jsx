import React from "react";
import Input from "../Input";
import Button from "../Button";

function ToDoContentHeader() {
    return (
        <div className="card">
            <Input />
            <label>
                <input type='checkbox' />
                Показывать выполненные
            </label>
            <Button children='Добавить задачу' />
        </div>
    )
}

export default ToDoContentHeader;