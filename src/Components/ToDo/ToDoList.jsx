import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import NewGroupItem from "./NewGroupItem";
import Button from "../Button";
import Input from '../Input';
import ToDoGroups from "../ToDo/ToDoGroups";
import { toggle } from '../../Store/NewGroup';

function ToDoList() {
    const lists = useSelector(state => state.todo.lists);
    const isVisibleNewList = useSelector(state => state.newList.visible);
    const dispatch = useDispatch();

    const onShowNewListForm = () => dispatch(toggle());

    return (
        <>
            <div className="card">
                <Input />
                <div className="list-group">
                    {
                        Object.keys(lists).map((listId) => (
                            <ToDoGroups key={listId} {...lists[listId]} />
                        ))
                    }
                    {isVisibleNewList && <NewGroupItem />}
                </div>
                <Button onClick={onShowNewListForm} children='Новый список' />
            </div>

        </>
    )
}

export default ToDoList;