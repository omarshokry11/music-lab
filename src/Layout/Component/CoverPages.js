import React from 'react';

import "./Style/CoverPages.scss";

export default function CoverPages(props) {
    return(
        <div className="main-cover-pages-container">
            <h1>{props.title}</h1>
        </div>
    )
}