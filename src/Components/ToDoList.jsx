import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Routes, Route } from 'react-router-dom'
import ToDoFilter from "./ToDoFilters";

function ToDoList() {
    return (
        <>
            <div className="toDoSide">
                <Input />
                <label>
                    <input type='checkbox'/>
                Показать выполнение
                </label>
                <Routes>
                    <Route path="/athome" element={<ToDoFilter name='Купить носки' time='На неделе' />} />
                    <Route path="/atwork" element={<ToDoFilter name='Сделать презентацию' time='через час' />} />
                    <Route path="/whatneed" element={<ToDoFilter name='Составить план' time='28.02.2014' />} />
                    <Route path="/lessons" element={<ToDoFilter name='Купить форму' time='в начале месяца' />} />
                </Routes>
                <Button children ='Добавить задачу'/>
            </div>
        </>
    )
}


export default ToDoList;