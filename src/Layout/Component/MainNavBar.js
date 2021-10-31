import React, {useState} from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import DropdownList from "./Block/DropdownList";

import "./Style/MainNavBar.scss";

export default function MainNavBar() {

    const [click, setClick] = useState();

    const linkList = [
        {id: 1, linkPath: "/", linkName: "Home"},
        {id: 2, linkPath: "/features", linkName: "Features"},
        {id: 3, linkPath: "/pricing", linkName: "Pricing"},
        {id: 4, linkPath: "/download", linkName: "Download"},
        {id: 5, linkPath: "/blog", linkName: "Blog"},
        {id: 6, linkPath: "/contact", linkName: "Contact"},
    ]

    return(
        <div className="main-nav-bar-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <Image src="/img/logo.webp" />
                    </div>
                    <div className="col-md-6 col-12 d-lg-block d-none">
                        <ul className="links">
                            {linkList.map((link) => <li key={link.id}><Link to={link.linkPath}>{link.linkName}</Link></li>)}
                        </ul>
                    </div>
                    <div className="col-md-3 d-md-block d-none">
                        <button>SIGN IN</button>
                    </div>
                    <div className="drop-down-list d-lg-none d-block" onClick={()=>setClick(!click)}>
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>
                    {click ? <DropdownList linkList={linkList}/> : null}
                </div>
            </div>
        </div>
    )
}