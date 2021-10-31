import React from "react";
import CoverPages from "../Component/CoverPages";
import MapItem from "../Component/MapItem";

import "./Style/ContactPage.scss";

export default function ContactPage() {

    const contactItem = [
        {id: 1, icon: "fas fa-home", h4: "Buttonwood, California.", p: "Rosemead, CA 91770"},
        {id: 2, icon: "fas fa-tablet-alt", h4: "Buttonwood, California.", p: "Rosemead, CA 91770"},
        {id: 3, icon: "far fa-envelope", h4: "Buttonwood, California.", p: "Rosemead, CA 91770"},
    ]

    return(
        <div className="main-home-page-container">
            <CoverPages title="Contact" />
            <div className="container">
                <div className="row">
                    <div className="col-12 map-item">
                        <MapItem />
                    </div>
                    <div className="col-12">
                        <h2>Get in Touch</h2>
                    </div>
                    <div className="col-lg-7 col-12">
                        <textarea placeholder="Enter Message" />
                        <input type="text" placeholder="Enter Your Name" />
                        <input className="email" type="text" placeholder="Email" />
                        <input className="subject" type="text" placeholder="Enter Subject" />
                        <button>SEND</button>
                    </div>
                    <div className="col-lg-5 col-12">
                        {contactItem.map((item) => <div className="contact-item" key={item.id}>
                            <div className="icon">
                                <i className={item.icon}> </i>
                            </div>
                            <div className="contact-details">
                                <h4>{item.h4}</h4>
                                <p>{item.p}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}