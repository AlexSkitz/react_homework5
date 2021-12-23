import React from "react";

function Button(props) {
    return (
        <button className="btn btn-info">{props.children}</button>
    )
}

export default Button;