import React from "react";

function ToDoFilter(props) {
    return (
        <>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Что надо сделать</th>
                        <th>Когда</th>
                        <th>Сделано</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props.name}</th>
                        <th>{props.time}</th>
                        <th><input type='checkbox' /></th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ToDoFilter;


