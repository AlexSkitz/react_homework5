import React from "react";

function Input() {
    return (
        <>
            <input type='text' placeholder="Фильтровать" className="toDoFilterInput" />
            <button className="btn btn-outline-dark" type="reset"><i className=" bi bi-x-circle-fill"></i></button>
        </>
    )

}

export default Input;