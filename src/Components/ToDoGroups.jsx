import React from "react";
import Input from './Input';
import Button from './Button';
import { NavLink } from "react-router-dom";


function ToDoGroups() {
    return (
        <>
            <div className="groupsSide">
                <Input />
                <div className="groupList">
                    <NavLink to="/athome" className='list-group-item '>Дом</NavLink>
                    <NavLink to="/atwork" className='list-group-item'>Работа</NavLink>
                    <NavLink to="/whatneed" className='list-group-item'>То что надо</NavLink>
                    <NavLink to="/lessons" className='list-group-item'>Занятия</NavLink>
                    <div>
                        <input type='text'/>
                        <Button children='Сохранить' />
                        <Button children='Отмена' />
                    </div>
                    <Button children='Новый список' />
                </div>
            </div>
        </>
    )
}

export default ToDoGroups;