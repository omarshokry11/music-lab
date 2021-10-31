import React from "react";
import {Image} from "react-bootstrap";

import "./Style/OnlineMusic.scss";
import TitleComponent from "./Block/TitleComponent";

export default function OnlineMusic() {

    const onlineItem = [
        {id: 1, img: "/img/download-1.webp", h3: "Offline mode.", span: "Save and listen anywhere."},
        {id: 2, img: "/img/download-2.webp", h3: "High quality audio.", span: "Enjoy the full range of sound."},
        {id: 3, img: "/img/download-3.webp", h3: "No ads.", span: "Enjoy nonstop music."},
        {id: 4, img: "/img/download-4.webp", h3: "Unlimited skips.", span: "Just tap skip."},
    ]

    return(
        <div className="main-online-music-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <TitleComponent
                            title="Get ready for seamless online music"
                            details="Utrust is a seamless integration that gives e-commerce businesses the power to accept digital currencies - and get all the benefits you can’t with just traditional payment methods."
                        />
                    </div>
                    {onlineItem.map((item) => <div className="col-lg-3 col-md-6 col-12 items" key={item.id}>
                        <Image src={item.img} />
                        <h3>{item.h3}</h3>
                        <span>{item.span}</span>
                    </div>)}
                </div>
            </div>
        </div>
    )
}