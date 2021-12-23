import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import {BASE_URL} from '../../Utils/index.js'
// import { service } from '../../Store/NewGroup/actions'


function ToDoGroups(props) {

    const service1 = ({ url, method = 'DELETE', data }) => {
        return fetch(`${BASE_URL}${url}.json`, {
            method: method,
            body: JSON.stringify(data)
        }).then((res) => res.json())
    };
    const onClickDelete = () => {
        service1({ method: 'DELETE', url:'/groups/:id' })
            .then((res) => {
                console.log('[DELETE]', res);
            })
    }

    return (
        <div className="groupItem">
            <NavLink to={props.to} className='list-group-item list-group-item-action'>{props.children}
                <Button className='groupItemButton' onClick={onClickDelete}>X</Button>
            </NavLink>

        </div>
    )
}

export default ToDoGroups;