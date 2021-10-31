import React from "react";
import {Link} from "react-router-dom";

export default function DropdownList({linkList}) {
    return(
        <div className="main-dropdown-list-container">
            <ul className="links">
                {linkList.map((link) => <li key={link.id}><Link to={link.linkPath}>{link.linkName}</Link></li>)}
            </ul>
        </div>
    )
}