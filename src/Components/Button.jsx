import React from "react";

function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className="btn btn-info">{props.children}</button>
    )
}

export default Button;