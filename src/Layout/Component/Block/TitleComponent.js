import React from "react";

export default function TitleComponent(props) {
    return(
        <div className="title">
            <h2>{props.title}</h2>
            <span>{props.details}</span>
        </div>
    )
}