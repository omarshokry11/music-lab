import React from "react";
import {Image} from "react-bootstrap";

import "./Style/MainFooter.scss";
import {Link} from "react-router-dom";

export default function MainFooter() {

    const mainFooter =[
        {id: 1, class: "col-lg-6 col-12", img: "/img/logo.webp", details: [
                {id: 1, icon: "fab fa-facebook-square"}, {id: 2, icon: "fab fa-linkedin-in"}, {id: 3, icon: "fab fa-instagram"}, {id: 4, icon: "fab fa-youtube"},
            ]},
        {id: 2, class: "col-lg-2 col-12", h2: "Support", links: [
                {id: 1, linkName: "Home"}, {id: 2, linkName: "About"}, {id: 3, linkName: "Services"}, {id: 4, linkName: "Blog"}, {id: 5, linkName: "Contact"},
            ]},
        {id: 3, class: "col-lg-2 col-12", h2: "Navigation", links: [
                {id: 1, linkName: "Work"}, {id: 2, linkName: "Services"}, {id: 3, linkName: "Products"}, {id: 4, linkName: "Tips & Tricks"},
            ]},
        {id: 4, class: "col-lg-2 col-12", h2: "Navigation", links: [
                {id: 1, linkName: "Work"}, {id: 2, linkName: "Services"}, {id: 3, linkName: "Products"}, {id: 4, linkName: "Tips & Tricks"},
            ]},
    ]

    return(
        <div className="main-footer-container">
            <div className="container">
                <div className="row">
                    {mainFooter.map((footer) => <div className={footer.class} key={footer.id}>
                        {footer.details ? <>
                            <Image src={footer.img} />
                            <p>Utrust is a seamless integration that gives e-commerce businesses the power to accept digital currencies - and get all the benefit.</p>
                            <ul className="social">
                                {footer.details.map((icon) => <li key={icon.id}><i className={icon.icon}> </i></li>)}
                            </ul>
                        </> : null}
                        {footer.links ? <>
                            <h2>{footer.h2}</h2>
                            <ul>
                                {footer.links.map((link) => <li key={link.id}><Link to="/">{link.linkName}</Link></li>)}
                            </ul>
                        </> : null}
                    </div>)}
                    <div className="col-12 text-center inner-footer">
                        <p>Copyright &copy;2021 All rights reserved | This template is made with <i className="fas fa-heart"> </i> by <strong>Colorlib</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}