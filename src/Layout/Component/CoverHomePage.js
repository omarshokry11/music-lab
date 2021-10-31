import React from "react";
import {Image} from "react-bootstrap";

import "./Style/CoverHomePage.scss";

export default function CoverHomePage() {
    return(
        <div className="main-cover-home-page-container">
            <div className="cover-details">
                <span>Intuitive. Powerful. Runs everywhere</span>
                <h1>Open the world of music. It’s all here.</h1>
                <button className="btn-1">DOWNLOAD FOR DESKTOP</button>
                <button className="btn-2">DOWNLOAD FOR MOBILE</button>
                <Image src="/img/coverhomepage.webp" />
            </div>
        </div>
    )
}